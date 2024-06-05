import styles from "./Homepage.module.scss";
import logo from "assets/LogoArctic.png";
import photo from "assets/Anna.png";
import {
  BsGithub,
  BsLinkedin,
  BsDownload,
  BsTelephone,
  BsEnvelope,
} from "react-icons/bs";

const Homepage = () => {
  return (
    <div className="container">
      <nav className={styles.navbar}>
        <img
          className={styles.companyLogo}
          src={logo}
          alt="Arctic Webs company logo"
        />
        <div className={styles.linkBox}>
          <a className={styles.navIcon} href="https://github.com/ArcticWebs">
            <BsGithub />
          </a>
          <a
            className={styles.navIcon}
            href="https://www.linkedin.com/in/anna-kiedrowska-98891b230/"
          >
            <BsLinkedin />
          </a>
          <a className={styles.navIcon} href="">
            <BsDownload />
          </a>
        </div>
      </nav>
      <div className={styles.heading}>
        <div className={styles.aboutMe}>
          <div className={styles.greetings}>
            <div className={styles.horizontalLine}></div>
            <h1>Hello, I'm Anna!</h1>
          </div>
          <p>
            <span className={styles.boldTxt}>FRONTEND DEVELOPER</span> with
            passion, aesthetic sense and enthusiasm for work.
          </p>
          <p>
            My strength is the ability to organize tasks, work with scattered
            data and quick adaptation to a new technical environment.
          </p>
          <p>
            with passion, aesthetic sense and enthusiasm for work. My strength
            is the ability to organize tasks, work with scattered data and quick
            adaptation to a new technical environment.
          </p>
          <div className={styles.tileBox}>
            <div className={styles.tile}>
              <h4>Projects</h4>
              <a href="">Lanthan Electronics</a>
              <a href="">Budget calculator</a>
              <a href="">Currency calculator</a>
            </div>
            <div className={styles.tile}>
              <h4>Contact</h4>
              <a className={styles.contactLink} href="">
                <BsTelephone />
                +48 502 932 625
              </a>
              <a className={styles.contactLink}>
                <BsEnvelope />
                kiedrowska.ania@gmail.com
              </a>
            </div>
          </div>
        </div>
        <img src={photo} alt="Anna Kiedrowska" />
      </div>
    </div>
  );
};

export default Homepage;
