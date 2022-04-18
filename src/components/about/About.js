import './about.css';
import ME from '../../assets/pharyPic-cityBg.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
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
            
            <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>1+ Years Experience Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about_card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Projects</h5>
                <small>80+ Completed Projects</small>
            </article>
    
        </div>   
        {/* end about cards */}

          <p>
          I'm a professional, driven, with a unique blend of experience in accounting , finance , customer services and programming who love problem solving and being creative.
          I'm constantly evolving, learning, and growing so you can expect that working with me is going to be fun.
          I'm also a people person who can't let a day go by without having a cup of coffee.
          I'm happy to discuss any opportunities available for fullstack web development roles. Please feel free to contact me anytime.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <p>Cheers,</p>
          <p><span id="signature">Phary Phal</span></p>

   
        </div>
        {/* end about content */}
        </div>   
        {/* // end about container */}
        
        

    </section>
  )
}

export default About