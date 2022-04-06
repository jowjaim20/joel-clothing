import MenuItem from "../../components/menu-item/MenuItem";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <MenuItem subtitle={"Shop now"} clothing={"HATS"} />
        <MenuItem subtitle={"Shop now"} clothing={"Jackets"} />
        <MenuItem subtitle={"Shop now"} clothing={"Sneakers"} />
        <MenuItem subtitle={"Shop now"} clothing={"Womens"} />
        <MenuItem subtitle={"Shop now"} clothing={"Mens"} />
      </div>
    </div>
  );
};

export default Homepage;
