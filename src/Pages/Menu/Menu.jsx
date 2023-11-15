import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessert2 from '../../assets/menu/dessert-bg.jpeg'
import pizza2 from '../../assets/menu/pizza-bg.jpg'
import salad2 from '../../assets/menu/salad-bg.jpg'
import soup2 from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';
// import PopularManu from '../PopularManu/PopularManu';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(data => data.category === 'dessert')
    const salad = menu.filter(data => data.category === 'salad')
    const pizza = menu.filter(data => data.category === 'pizza')
    const soup = menu.filter(data => data.category === 'soup')
    const offered = menu.filter(data => data.category === 'offered')
    return (
        <div className='space-y-16'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="OUR MENU" subTitle="Would you like to try a dish?" />
            <div className="flex justify-center">
                <div className="space-y-5">
                    <h1 className="border-b-4 pb-5 text-yellow-600 text-center w-96">--- Don`t miss ---</h1>
                    <h4 className="text-4xl uppercase pb-5 w-96 text-center border-b-4">today`s offer</h4>
                </div>
            </div>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert items */}

            <Cover img={dessert2} title="DESSERTS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <MenuCategory items={dessert} title={'dessert'}></MenuCategory>

            {/* pizza items */}

            <Cover img={pizza2} title={"PIZZA"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <MenuCategory items={pizza} title={'pizza'}></MenuCategory>

            {/* salad items */}

            <Cover img={salad2} title={"SALADS"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <MenuCategory items={salad} title={'salad'}></MenuCategory>

            {/* soup items */}

            <Cover img={soup2} title={"SOUPS"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <MenuCategory items={soup} title={'soup'}></MenuCategory>

        </div>
    );
};

export default Menu;