import classes from "./Home.module.css";
import Circle from "./Circle";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

function HomePage() {
  return (
    <>
      <div className={classes.container}>
        <h1>
          Hi! My name is Katarzyna and I am Frontend Developer.
        </h1>
        <h3>PORTFOLIO BY KATARZYNA ŚLIWKA</h3>
        <Circle className={classes.circle}/>
        <a >
        <AiFillLinkedin className="icon"/>
      </a>
      <a className="icon">
        <AiFillGithub className="icon"/>
      </a>
      <a className="icon">
        <AiOutlineMail className="icon"/>
      </a>
        <a className={classes.scroll_down}>Scroll Down</a>
        
      </div>
      
    </>
  );
}

export default HomePage;
