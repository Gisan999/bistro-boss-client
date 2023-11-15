import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div 
        style={{
            backgroundImage: `url(${featuredImg})`,
            backgroundSize: `cover`,
            backgroundRepeat: 'no-repeat'
        }}
         className='featured-item bg-fixed'
        >

            <div className='py-20 text-white bg-black bg-opacity-60'>
                <div className="flex justify-center">
                    <div className="space-y-5">
                        <h1 className="border-b-4 pb-5 text-yellow-600 text-center w-96">---Check it out---</h1>
                        <h4 className="text-4xl pb-5 w-96 text-center border-b-4">FEATURED ITEM</h4>
                    </div>
                </div>
                <div className='max-w-screen-xl mx-auto mt-9'>
                    <div className='flex flex-col px-5 lg:px-0 md:flex-row justify-between gap-10 items-center' >
                        <div><img src={featuredImg} alt="" /></div>
                        <div className='space-y-3 '>
                            <h1 className='text-2xl '>March 20, 2023</h1>
                            <h2 className='text-2xl'>WHERE CAN I GET SOME?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <div>
                                <button className=' mt-5 btn bg-transparent text-white outline-none border-0  border-b-4 btn-outline px-8'>read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;