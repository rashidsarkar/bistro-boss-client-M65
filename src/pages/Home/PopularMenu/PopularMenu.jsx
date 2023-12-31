import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //     fetch('menu.json')
  //         .then(res => res.json())
  //         .then(data => {
  //             const popularItems = data.filter(item => item.category === 'popular');
  //             setMenu(popularItems)
  //         })
  // }, [])
  const { menu } = useMenu();
  const popular = menu.filter((item) => item.category == "popular");
  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid gap-10 md:grid-cols-2">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="mt-4 border-0 border-b-4 btn btn-outline">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
