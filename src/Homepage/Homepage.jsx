import styles from "./Homepage.module.scss";
import logo from "assets/LogoArctic.png";
import photo from "assets/Anna.png";

const Homepage = () => {
  return (
    <div className="container">
      <img
        className={styles.companyLogo}
        src={logo}
        alt="Arctic Webs company logo"
      />
      <div className={styles.greetings}>
        <div className={styles.horizontalLine}></div>
        <h1>Hello, I'm Anna!</h1>
      </div>
      <p>
        <span>FRONTEND DEVELOPER</span>with passion, aesthetic sense and
        enthusiasm for work.
      </p>
      <p>
        My strength is the ability to organize tasks, work with scattered data
        and quick adaptation to a new technical environment.
      </p>
      <p>
        with passion, aesthetic sense and enthusiasm for work. My strength is
        the ability to organize tasks, work with scattered data and quick
        adaptation to a new technical environment.
      </p>
      <img src={photo} alt="Anna Kiedrowska" />
    </div>
  );
};

export default Homepage;
