import Cover from "../Shared/Cover/Cover";
import order from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OrderTab from "./OrderTab";
const Order = () => {
   
    const categories = ['salad', 'pizza', 'soup', 'dessert',  'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    console.log(category);
    const dessert = menu.filter(data => data.category === 'dessert')
    const salad = menu.filter(data => data.category === 'salad')
    const pizza = menu.filter(data => data.category === 'pizza')
    const soup = menu.filter(data => data.category === 'soup')
    const offered = menu.filter(data => data.category === 'drinks')
    return (
        <div className="">
              <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={order} title={'OUR SHOP'} subTitle={'Would you like to try a dish?'}></Cover>
            <div className="flex justify-center">

                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                  <div className="flex justify-center  my-8 mt-16">
                  <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                  </div>
                    <TabPanel>
                        <OrderTab item={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab item={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab item={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab item={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab item={offered}></OrderTab>
                    </TabPanel>
                </Tabs>

            </div>
        </div>
    );
};

export default Order;