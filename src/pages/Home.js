import Category from "../component/category/Category";
import Navbar from "../component/navbar/Navbar";
import NewProducts from "../component/homeProducts/NewProducts";
import SimpleSlider from "../component/slider/SimpleSlider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <Category />
      <NewProducts />
    </div>
  );
};

export default Home;
