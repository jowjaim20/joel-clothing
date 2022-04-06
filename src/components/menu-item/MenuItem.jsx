import "./menuItem.scss";

const MenuItem = ({ subtitle, clothing }) => {
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{clothing}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default MenuItem;
