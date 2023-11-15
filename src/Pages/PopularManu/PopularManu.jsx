// import { useEffect, useState } from "react";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularManu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(data => data.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('/menu.json')
    //         .then(res => res.json())
    //         .then(data => setMenu(data.filter(data => data.category === 'popular')))
    // }, [])
    return (
        <div>
            <div className="flex justify-center">
                <div className="space-y-5">
                    <h1 className="border-b-4 pb-5 text-yellow-600 text-center w-96">---Check it out---</h1>
                    <h4 className="text-4xl pb-5 w-96 text-center border-b-4">FROM OUR MENU</h4>
                </div>
            </div>
          <div className="max-w-screen-xl mx-auto my-9 px-3 lg:px-0">
          <div className="grid md:grid-cols-2 gap-7	">
                {
                    popular.map(data => <MenuItem key={data._id} item={data}></MenuItem>)
                }
            </div>
          </div>

        </div>
    );
};

export default PopularManu;