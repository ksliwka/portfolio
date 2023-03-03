import classes from "./Home.module.css";
import Circle from "./Circle";

function HomePage() {
  return (
    <>
      <div className={classes.container}>
        <h1>
          Hi! My name is Katarzyna and I am Frontend Developer.
        </h1>
        <h3>PORTFOLIO BY KATARZYNA ŚLIWKA</h3>
        <Circle className={classes.circle}/>
        <a className={classes.scroll_down}>Scroll Down</a>
        
      </div>
      
    </>
  );
}

export default HomePage;
