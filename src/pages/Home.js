import Category from "../component/category/Category";
import Navbar from "../component/navbar/Navbar";
import NewProducts from "../component/homeProducts/NewProducts";
import SimpleSlider from "../component/slider/SimpleSlider";
import Services from "../component/services/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <Category />
      <NewProducts />
      <Services />
    </div>
  );
};

export default Home;
