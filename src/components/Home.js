import classes from "./Home.module.css";

function HomePage() {
  return (
    <>
      <div className={classes.container}>
        <h1>
          Hi! My name is Katarzyna and I am Frontend developer, living in
          Poland.
        </h1>
        <h3>PORTFOLIO BY KATARZYNA ŚLIWKA</h3>
        <a className={classes.scroll_down}>Scroll Down</a>
      </div>
    </>
  );
}

export default HomePage;
