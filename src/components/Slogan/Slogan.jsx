import "./Slogan.css";
import { Link } from "react-router-dom";

export default function Slogan() {
  return (
    <main className="main-slogan">
      <div className="wrapper-slogan">
        <div className="content">
          <h1>
            Discover<span className="highlight">.</span> Shop<span className="highlight">.</span> Enjoy<span className="highlight">.</span>
          </h1>
          <h2>
            Explore the latest in fashion, electronics, and more. 
            <br />
            Your ultimate shopping destination.
          </h2>
          <Link className="link-active link-text" to="/products">
          <button className="hero-button">See our products</button>
          </Link>
        </div>
        <div className="trusted-partners">
          <p>Trusted Partners</p>
          <div className="partners-logos">
            <div className="partners-logo-1">
            <img src="https://truetexashoops.com/wp-content/uploads/2020/03/54-542261_adidas-white-logo-png-adidas-white-logo-vector.png" alt="SquareStone Logo" />
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Nike-logo-png-white.png" alt="Martino Logo" />
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
