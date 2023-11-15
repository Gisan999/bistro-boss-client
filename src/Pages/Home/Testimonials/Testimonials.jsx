import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='max-w-screen-xl mx-auto my-14'>
            <div className="flex justify-center">
                <div className="space-y-5">
                    <h1 className="border-b-4 pb-5 text-yellow-600 text-center w-96">---What Our Clients Say---</h1>
                    <h4 className="text-4xl pb-5 w-96 text-center border-b-4">TESTIMONIALS</h4>
                </div>
            </div>
            <div className='mt-12'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(data => <SwiperSlide key={data._id}>
                            <div>
                                <div className='flex justify-center mb-5'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={data.rating}
                                        readOnly
                                    />
                                </div>
                                <div className='flex justify-center'> <p className='text-center w-[300px] md:w-[550px] lg:w-[900px]'>
                                    {data.details}
                                </p></div>
                                <h3 className='text-2xl text-center text-yellow-700 font-semibold uppercase'>{data.name}</h3>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;