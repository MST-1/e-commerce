import "./Footer.css";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/productContext";

const Footer = () => {
  const { showFilter } = useProducts();

  return (
    <footer className={`${showFilter ? "hide-div" : null}`}>
      <div className="about">
        <Link to="/" className="nav-brand">
          ClothSify
        </Link>

        <div className="text">Choose from our wide variety of clothing</div>

        <div className="social">
          <a href="https://github.com/MST-1" target="_blank">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://instagram.com/_iammst_?igshid=YmMyMTA2M2Y=" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/madhukar-singh-tomar-36b9a4190" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="quick-links">
        <div className="heading">Quick Links</div>
        <div className="sub-heading">
          <Link to="/products">Products</Link>
        </div>
        <div className="sub-heading">
          <Link to="/wishlist">Wishlist</Link>
        </div>
        <div className="sub-heading">
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <div className="contact">
        <div className="heading">Contact Us</div>

        <div className="sub-heading address">
          <i className="fa fa-map-marker"></i>Noida City Center, India
        </div>
        <div className="sub-heading phone">
          <i className="fa fa-phone"></i>+91 8285443123
        </div>
        <div className="sub-heading e-mail">
          <i className="fa fa-envelope"></i>1509540032@coet.in
        </div>
      </div>
    </footer>
  );
};

export { Footer };
