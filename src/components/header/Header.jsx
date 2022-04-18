import CTA from './CTA';
import ME from '../../assets/pharyPic-cityBg.png'
// import ME from '../../assets/pharyPic-NightCityBg.png'
// import ME from '../../assets/pharyPic-clearBg.png'
import HeaderSocials from './HeaderSocials';
import './header.css';


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Phary Phal</h1>
        <h5 className = "text-light">Fullstack Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt='me' />
        </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header