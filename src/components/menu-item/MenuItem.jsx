import "./menuItem.scss";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`menu-item ${size}`}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};
export default MenuItem;
