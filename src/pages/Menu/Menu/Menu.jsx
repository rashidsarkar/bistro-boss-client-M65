import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import dessert from "../../../assets/menu/dessert-bg.jpeg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import MenuItem from "../../Shared/MenuItem/MenuItem";

function Menu() {
  const { menu } = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover title={"our menu"} img={menuImg}></Cover>
      {/* <PopularMenu></PopularMenu> */}

      <SectionTitle
        subHeading={`Dont Miss`}
        heading={`tODAYS oFFER`}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu item */}
      <MenuCategory
        items={desserts}
        title={"dessert"}
        coverImg={dessert}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title={"salad"}
        coverImg={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"soup"}
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
}

export default Menu;
