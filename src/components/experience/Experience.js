import './experience.css';
import JS from '../../assets/jsLogo.png';
import CSHARP from '../../assets/cSharp.png';
import MONGO from '../../assets/mongoDB.png';
import CSS from '../../assets/cssLogo.png';
import NODE from '../../assets/nodeLogo.png';
import HTML from '../../assets/htmlLogo.png';
import BS from '../../assets/bootstrap.png';
import JAVA from '../../assets/javaLogo.png';
import PYTHON from '../../assets/pythonLogo.png';
import SQL from '../../assets/sqlLogo.png';
import SCRATCH from '../../assets/scratchLogo.png';
import ASP from '../../assets/aspNetCore.png';

const Experience = () => {
  return (
     <section class="" id='experience'>
      <div class="">
        <h1>Skills</h1>
        <h2 class="">Technology</h2>
      </div>

    <div class="skill-logo">
      <div class="">
        <img src={SCRATCH} alt=""/>
      </div> 
      <div class="">
        <img src={HTML} alt="" />
      </div> 
      <div class="">
        <img src={CSS} alt="" />
      </div>
      <div class="">
        <img src={JS} alt="" />
      </div>
      <div class="">
        <img src={NODE} alt="" />
      </div>
      <div class="">
        <img src={MONGO} alt=""/>
      </div>
      <div class="">
        <img src={MONGO} alt=""/>
      </div>
      <div class="">
        <img src={BS} alt="" />
      </div>
      <div class="">
        <img src={SQL} alt="" />
      </div>
      <div class="">
        <img src={PYTHON} alt="" />
      </div>
      <div class="">
        <img src={JAVA} alt=""/>
      </div>
      <div class="">
        <img src={CSHARP} alt=""/>
      </div>
      <div class="">
        <img src={ASP} alt=""/>
      </div>
    </div>
  </section>
  )
}

export default Experience