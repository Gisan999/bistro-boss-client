import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CkeckOutForm from "./CkeckOutForm";

// TODO: Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETEWAY);
const Payment = () => {
    return (
        <div>
            <div className="flex justify-center mt-5">
                <div className="space-y-5">
                    <h1 className="border-b-4 pb-5 text-yellow-600 text-center w-96">---Payment---</h1>
                    <h4 className="text-4xl pb-5 w-96 text-center border-b-4">PLEASE PAY TO EAT</h4>
                </div>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CkeckOutForm></CkeckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;