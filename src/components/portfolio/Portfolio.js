import './portfolio.css';
import IMG1 from '../../assets/portFolio/apiQuiz.PNG'
import IMG2 from '../../assets/portFolio/neakersCave.PNG'
import IMG3 from '../../assets/portFolio/taskPlanner.png'
import IMG4 from '../../assets/portFolio/greenexExpo.PNG'
import IMG5 from '../../assets/portFolio/nodeFarm.png'
import IMG6 from '../../assets/portFolio/not-to-do-list.png'
import IMG7 from '../../assets/portFolio/movieCave.PNG'
import IMG8 from '../../assets/portFolio/DestinyNumber.PNG'
import IMG9 from '../../assets/portFolio/feedbackApp.PNG'

const data = [
  {
    id:1,
    image:IMG1,
    title:"Multiple Choices Quiz using API",
    github:"https://github.com/tech-and-me/quizAPI",
    demo:"https://tech-and-me.github.io/quizAPI/"
  },
  {
    id:2,
    image:IMG2,
    title:"Online Sneakers Shop",
    github:"https://github.com/tech-and-me/e-commerce-version1",
    demo:"https://tech-and-me.github.io/e-commerce-version1/"
  },
  {
    id:3,
    image:IMG3,
    title:"Task Planner",
    github:"https://github.com/tech-and-me/jwd-final-project",
    demo:"https://tech-and-me.github.io/jwd-final-project/"
  },
  {
    id:4,
    image:IMG4,
    title:"Greenex Expo",
    github:"https://github.com/tech-and-me/greenex-expo",
    demo:"https://tech-and-me.github.io/greenex-expo/"
  },
  {
    id:5,
    image:IMG5,
    title:"Online Vegie Market",
    github:"https://github.com/tech-and-me/vegie-cave",
    demo:"https://github.com/tech-and-me/vegie-cave"
  },
  {
    id:6,
    image:IMG6,
    title:"To-Do and Not-To-Do List",
    github:"https://github.com/tech-and-me/react-not-to-do-list-2",
    demo:"https://tech-and-me.github.io/react-not-to-do-list-2/"
  },
  {
    id:7,
    image:IMG7,
    title:"React Movie Collections",
    github:"https://github.com/tech-and-me/react-movie-cave",
    demo:"https://tech-and-me.github.io/react-movie-cave/"
  },
  {
    id:8,
    image:IMG8,
    title:"Destiny Number Calculator",
    github:"https://github.com/tech-and-me/destinyNumberCalculator",
    demo:"https://tech-and-me.github.io/destinyNumberCalculator/"
  },
  {
    id:9,
    image:IMG9,
    title:"Feedback App",
    github:"https://github.com/tech-and-me/react-feedback-app",
    demo:"https://tech-and-me.github.io/react-feedback-app/"
  }

]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1>My Recent Work</h1>
      <h2>Portfolio</h2>
      
      <div className="container portfolio_container">
        {
          data.map((el,id) => {
            return (
              <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={el.image} alt={el.title} />
              </div>
              <h4>{el.title}</h4>
              <a href={el.github} target="_blank" className="btn">Github</a>
              <a href={el.demo} target="_blank" className="btn btn-primary">Live Demo</a>   
            </article>
            )
          })
        }
       

       

      </div>
    </section>
  )
}

export default Portfolio