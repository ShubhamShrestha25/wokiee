import Category from "../component/category/Category";
import Navbar from "../component/navbar/Navbar";
import SimpleSlider from "../component/slider/SimpleSlider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <Category />
    </div>
  );
};

export default Home;
