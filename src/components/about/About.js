import "./about.css";
import ME from "../../assets/pharyAtCafe1.png";
import { FaAward } from "react-icons/fa";
// import {FiUsers} from 'react-icons/fi';
// import {VscFolderLibrary} from 'react-icons/vsc'
import { GiHearts } from "react-icons/gi";
import { VscGithub } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h1>Get to Know</h1>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h4>Experience</h4>
              <h6>6+ months in Tech</h6>
              <h6>5+ Years in Accounting & Finance</h6>
              <h6>4+ Years in Customer Services</h6>
            </article>

            <article className="about_card">
              <VscGithub className="about_icon" />
              <h4>GitHub Activities</h4>
              <h6>90+ Repositories in 10 months</h6>
              <h6>900+ Contributions in 10 months</h6>
            </article>

            <article className="about_card">
              <GiHearts className="about_icon" />
              <h4>I love</h4>
              <h6>Programming</h6>
              <h6>Challenges</h6>
              <h6>Networking</h6>
              <h6> & Coffee :)</h6>
            </article>
          </div>
          {/* end about cards */}

          <p>
            I'm a professional, driven, with a unique blend of experience in
            accounting , finance , customer services and programming who love
            problem solving and being creative. I'm constantly evolving,
            learning, and growing so you can expect that working with me is
            going to be fun. I'm also a people person who can't let a day go by
            without having a cup of coffee. I'm happy to discuss any
            opportunities available for fullstack web development roles. Please
            feel free to contact me anytime.
          </p>
          {/* <p></p> */}
          {/* <p><span id="signature">Phary Phal</span></p> */}

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        {/* end about content */}
      </div>
      {/* // end about container */}
    </section>
  );
};

export default About;
