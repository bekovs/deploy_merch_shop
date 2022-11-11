import React from "react";
import icon from "../assets/icons/icons8-facebook.svg";
import icon2 from "../assets/icons/icons8-twitter.svg";
import icon3 from "../assets/icons/icons8-tiktok.svg";
import icon4 from "../assets/icons/icons8-instagram.svg";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3 style={{ textAlign: "center" }}>ES merch shop</h3>
              <p style={{ textAlign: "center" }}>
                Hello dear guest this is our beautiful website, and i dont know what to write here
                So i will put some default text. Ut vehicula. Etiam
                quis tristique lectus. Aliquam in arcu eget velit pulvinar
                dictum vel in justo.
              </p>
            </div>
            <div className="col item social">
              <a href="#">
                <img style={{ width: "70%" }} src={icon} />
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <img style={{ width: "70%" }} src={icon2} />
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <img style={{ width: "70%" }} src={icon3} />
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <img style={{ width: "70%" }} src={icon4} />
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="copyright">ES © 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
