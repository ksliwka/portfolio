
import classes from "./Header.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a>About</a>
            <a>Projects</a>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
