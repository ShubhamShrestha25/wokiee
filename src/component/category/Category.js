import "./Category.css";

const Category = () => {
  return (
    <div className="catContainer">
      <div className="catRow">
        <div className="catItem">
          <img src="/images/men.jpg" alt="" />
          <div className="catButton">
            <button>MEN</button>
          </div>
        </div>
        <div className="catItem">
          <img src="/images/women.jpg" alt="" />
          <div className="catButton">
            <button>WOMEN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
