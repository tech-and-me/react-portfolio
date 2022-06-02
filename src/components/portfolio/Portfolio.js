import "./portfolio.css";
import IMG1 from "../../assets/portFolio/apiQuiz.PNG";
import IMG2 from "../../assets/portFolio/neakersCave.PNG";
import IMG3 from "../../assets/portFolio/taskPlanner.png";
import IMG4 from "../../assets/portFolio/greenexExpo.PNG";
import IMG5 from "../../assets/portFolio/nodeFarm.png";
import IMG6 from "../../assets/portFolio/not-to-do-list.png";
import IMG7 from "../../assets/portFolio/movieCave.PNG";
import IMG8 from "../../assets/portFolio/blog-fullstack.PNG";
import IMG9 from "../../assets/portFolio/feedbackApp.PNG";

const data = [
  {
    id: 8,
    image: IMG8,
    title: "Blog Fullstack",
    github: "https://github.com/tech-and-me/fullstack-blog-client",
    demo: "https://dainty-gecko-2d4bd7.netlify.app/",
    tech: "ReactJs | Express | NodeJs | MySQL | RESTful API | Html | Css | Bootstrap",
  },
  {
    id: 1,
    image: IMG1,
    title: "API Quiz Project",
    github: "https://github.com/tech-and-me/quizAPI",
    demo: "https://tech-and-me.github.io/quizAPI/",
    tech: "JavaScript | RESTful API | Html | CSS",
  },
  {
    id: 2,
    image: IMG2,
    title: "Online Sneakers Shop",
    github: "https://github.com/tech-and-me/e-commerce-version1",
    demo: "https://tech-and-me.github.io/e-commerce-version1/",
    tech: "JavaScript | Html | Css | Bootstrap",
  },
  {
    id: 3,
    image: IMG3,
    title: "Task Planner",
    github: "https://github.com/tech-and-me/jwd-final-project",
    demo: "https://tech-and-me.github.io/jwd-final-project/",
    tech: "JavaScript | Html | Css | Bootstrap",
  },
  {
    id: 4,
    image: IMG4,
    title: "Greenex Expo",
    github: "https://github.com/tech-and-me/greenex-expo",
    demo: "https://tech-and-me.github.io/greenex-expo/",
    tech: "JavaScript | Html | Css | Bootstrap",
  },
  {
    id: 5,
    image: IMG5,
    title: "Online Vegie Market",
    github: "https://github.com/tech-and-me/vegie-cave",
    demo: "https://github.com/tech-and-me/vegie-cave",
    tech: "JavaScript | Express | NodeJs | Html | Css",
  },
  {
    id: 6,
    image: IMG6,
    title: "To-Do & Not-To-Do List",
    github: "https://github.com/tech-and-me/react-not-to-do-list-2",
    demo: "https://tech-and-me.github.io/react-not-to-do-list-2/",
    tech: "ReactJs | Html | Css | Bootstrap",
  },
  {
    id: 7,
    image: IMG7,
    title: "React Movie Collections",
    github: "https://github.com/tech-and-me/react-movie-cave",
    demo: "https://tech-and-me.github.io/react-movie-cave/",
    tech: "ReactJs | RESTful API | Html | Css | Bootstrap",
  },

  {
    id: 9,
    image: IMG9,
    title: "Feedback App",
    github: "https://github.com/tech-and-me/react-feedback-app",
    demo: "https://tech-and-me.github.io/react-feedback-app/",
    tech: "ReactJs | Html | Css",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>My Recent Work</h1>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map((el, id) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={el.image} alt={el.title} />
              </div>
              <h4>{el.title}</h4>
              <h6>{el.tech}</h6>
              <a href={el.github} target="_blank" className="btn">
                Github
              </a>
              <a href={el.demo} target="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
