import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
// import {BiBook} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
// import {RiServiceLine} from 'react-icons/ri'
// import {GrProjects} from 'react-icons/gr'
import {VscProject} from 'react-icons/vsc'
// import {BiMessageSquareDetail} from 'react-icons/bi';
import {TiContacts} from 'react-icons/ti';
import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSkills/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><VscProject/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiContacts/></a>
    </nav>
  )
}

export default Nav