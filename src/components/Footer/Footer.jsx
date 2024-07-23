import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h1 style={{ fontSize: "30px", marginLeft: "50px" }}>ShoppingCart ©</h1>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      <p>Novi Pazar 36300</p>
      <p>Contact us at: mirzamujezinovic212@gmail.com</p>
      <p>Phone number: +3810666310631</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      </footer>
    </>
  );
};

export default Footer;