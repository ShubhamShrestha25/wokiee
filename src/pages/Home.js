import Category from "../component/category/Category";
import NewProducts from "../component/homeProducts/NewProducts";
import SimpleSlider from "../component/slider/SimpleSlider";
import Services from "../component/services/Services";
import BestSelling from "../component/homeProducts/BestSelling";
import Footer from "../component/footer/Footer";

const Home = () => {
  return (
    <div>
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
