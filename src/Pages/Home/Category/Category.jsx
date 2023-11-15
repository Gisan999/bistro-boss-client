import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
// import 'swiper/css/free-mode';
// import './styles.css';v  
import 'swiper/css';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
const Category = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-12'>
            <Swiper
                 slidesPerView={4}
                 spaceBetween={30}
                 centeredSlides={true}
                 pagination={{
                   clickable: true,
                 }}
                 modules={[Pagination]}
                 className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-3xl text-center uppercase -mt-10 text-white'>salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-3xl text-center uppercase -mt-10 text-white'>pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-3xl text-center uppercase -mt-10 text-white'>soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-3xl text-center uppercase -mt-10 text-white'>desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='text-3xl text-center uppercase -mt-10 text-white'>salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-3xl text-center uppercase -mt-10 text-white'>desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-3xl text-center uppercase -mt-10 text-white'>soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-3xl text-center uppercase -mt-10 text-white'>desserts</h2>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;