import "./experience.css";
import JS from "../../assets/jsLogo.png";
import CSHARP from "../../assets/cSharp.png";
import MONGO from "../../assets/mongoDB.png";
import CSS from "../../assets/cssLogo.png";
import NODE from "../../assets/nodeLogo.png";
import HTML from "../../assets/htmlLogo.png";
import BS from "../../assets/bootstrap.png";
import JAVA from "../../assets/javaLogo.png";
import PYTHON from "../../assets/pythonLogo.png";
import SQL from "../../assets/sqlLogo.png";
import SCRATCH from "../../assets/scratchLogo.png";
import ASP from "../../assets/aspNetCore.png";
import React from "../../assets/reactLogo.png";
import EFCore from "../../assets/efCore.png";
import API from "../../assets/restAPI.png";

const Experience = () => {
  return (
    <section class="" id="experience">
      <div class="">
        <h1>Skills</h1>
        <h2 class="">Technology</h2>
      </div>

      <div class="skill-logo">
        <div class="">
          <img src={API} alt="api" />
        </div>
        <div class="">
          <img src={JS} alt="Js" />
        </div>
        <div class="">
          <img src={React} alt="React" />
        </div>
        <div class="">
          <img src={NODE} alt="Node" />
        </div>
        <div class="">
          <img src={SQL} alt="Sql" />
        </div>
        <div class="">
          <img src={MONGO} alt="Mongo" />
        </div>
        <div class="">
          <img src={ASP} alt="Asp" />
        </div>
        <div class="">
          <img src={EFCore} alt="EFCore" />
        </div>
        <div class="">
          <img src={CSHARP} alt="CSharp" />
        </div>
        <div class="">
          <img src={HTML} alt="Html" />
        </div>
        <div class="">
          <img src={CSS} alt="Css" />
        </div>
        <div class="">
          <img src={BS} alt="Bs" />
        </div>
        <div class="">
          <img src={PYTHON} alt="Python" />
        </div>
        <div class="">
          <img src={JAVA} alt="Java" />
        </div>

        <div class="">
          <img src={SCRATCH} alt="Scratch" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
