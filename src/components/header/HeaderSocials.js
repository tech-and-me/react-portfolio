import { BsLinkedin,BsTwitter} from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import './header.css';



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/phary-phal-962a3251/" target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com/AndmeTech" target="_blank"><BsTwitter/></a>
        <a href="https://github.com/tech-and-me" target="_blank"><FaGithubSquare/></a>
    </div>
  )
}

export default HeaderSocials