import "./menuItem.scss";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size }) => {
  let navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`menu-item ${size}`}
    >
      <div className="content">
        <button onClick={() => navigate("/")}>Joel</button>
      </div>
    </div>
  );
};

export default MenuItem;
