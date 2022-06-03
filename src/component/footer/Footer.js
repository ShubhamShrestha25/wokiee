import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerAboutus">
          <h4>ABOUT US</h4>
          <p>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor ut labore et dolore. Lorem ipsum dolor amet conse
            ctetur adipisicing elit, sedo eiusmod tempor incididunt ut labore
            etdolore.
          </p>
        </div>
        <div className="footerContactus">
          <h4>CONTACT US</h4>
          <p>Address: Kathmandu,Nepal</p>
          <p>Phone: 9855494601</p>
          <p>Hours: 7 Days a week from 10 am to 6 pm</p>
          <p>E-mail: info@wokieeNepal.com</p>
        </div>
      </div>
      <h3>
        {" "}
        &copy; {new Date().getFullYear()} <span>WoKiee</span> | All rights
        reserved
      </h3>
    </div>
  );
};

export default Footer;
