import Category from "../component/category/Category";
import Navbar from "../component/navbar/Navbar";
import NewProducts from "../component/homeProducts/NewProducts";
import SimpleSlider from "../component/slider/SimpleSlider";
import Services from "../component/services/Services";
import Footer from "../component/footer/Footer";
import BestSelling from "../component/homeProducts/BestSelling";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <Category />
      <NewProducts />
      <BestSelling />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
