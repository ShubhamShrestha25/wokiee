import { BikeScooter, CheckCircle, HeadsetMic } from "@mui/icons-material";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="servicesItems">
        <BikeScooter className="serviceIcons" />
        <div className="servicesText">
          <h4>FREE SHIPPING</h4>
          <p>Free shipping on all orders above 50$</p>
        </div>
      </div>
      <div className="servicesItems">
        <HeadsetMic className="serviceIcons" />
        <div className="servicesText">
          <h4>SUPPORT 24/7</h4>
          <p>Contact us 24 hours a day, 7 days a week</p>
        </div>
      </div>
      <div className="servicesItems">
        <CheckCircle className="serviceIcons" />
        <div className="servicesText">
          <h4>Verified Seller</h4>
          <p>Trusted seller by the peoples choice </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
