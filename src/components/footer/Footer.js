import "./footer.css";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import white_logo from "../../assets/logoWhitePhary.png";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        <img src={white_logo} />
      </a>
      <ul class="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/tech-and-me" target="_blank">
          <FaGithubSquare />
        </a>
        <a href="https://twitter.com/home" target="_blank">
          <BsTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/phary-phal-962a3251/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer_copyright">
        <h5>Developed by Phary Phal &copy; 2022. All rights reserved.</h5>
      </div>
    </footer>
  );
};

export default Footer;
