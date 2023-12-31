import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CkeckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const navigate = useNavigate();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
       if(totalPrice > 0){
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then(res => {
            const data = res.data;
            console.log(data.clientSecret);
            setClientSecret(data.clientSecret);
        })
       }
    }, [axiosSecure, totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if(confirmError){
            console.log('confirm error');
        }else{
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartId: cart.map(item => item._id),
                    menuItem: cart.map(item => item.id),
                    status: 'pending'
                }
              const res = await  axiosSecure.post('/payment', payment)
              console.log('payment saved',res.data);
              refetch();
              if(res.data?.paymentResult?.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Thank You For The Payment",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/dashboard/paymentHistory')
              }
                // .then(res => {
                //     const data = res.data;
                //     console.log(data);
                // })
            }
        }
    }
    return (
     <div className="max-w-screen-md mx-auto mt-12">
           <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}>
            </CardElement>
            <button className="btn btn-sm btn-outline btn-secondary px-7 rounded-md my-4" type="submit" disabled={!stripe || !clientSecret}>pay</button>
            <p className="text-red-500">{error}</p>
            {transactionId && <p className="text-green-500">Your transaction Id: {transactionId}</p>}

        </form>
     </div>
    );
};

export default CkeckOutForm;