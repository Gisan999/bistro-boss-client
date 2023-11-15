/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';
const Cover = ({img, title, subTitle}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div>
            <div className="hero h-[750px] bg-fixed" >
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-center text-neutral-content bg-black bg-opacity-60 py-32 px-20 md:px-56 lg:px-96">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl md:text-5xl font-bold font-serif uppercase">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
      
    );
};

export default Cover;