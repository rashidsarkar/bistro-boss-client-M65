import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

function MenuCategory({ items, title, coverImg }) {
  return (
    <div className="pt-8">
      {title && <Cover title={title} img={coverImg}></Cover>}
      <div className="grid gap-10 mt-16 md:grid-cols-2">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="mt-4 border-0 border-b-4 btn btn-outline">
          Order Now
        </button>
      </Link>
    </div>
  );
}

export default MenuCategory;
