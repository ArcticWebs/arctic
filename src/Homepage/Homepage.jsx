import styles from "./Homepage.module.scss";
import logo from "assets/LogoArctic.png";
import photo from "assets/Anna.png";
import resume from "assets/AnnaKiedrowska.pdf";
import {
  BsGithub,
  BsLinkedin,
  BsDownload,
  BsTelephone,
  BsEnvelope,
} from "react-icons/bs";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
  SiFigma,
} from "react-icons/si";

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
          <a
            className={styles.navIcon}
            href={resume}
            download="Anna Kiedrowska CV"
          >
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
            data and quick adaptation to a new technical environment. In every
            project I value good design and pay attention to the smallest
            details.
          </p>

          <div className={styles.techIcons}>
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiReact />
            <SiSass />
            <SiFigma />
          </div>
          <div className={styles.tileBox}>
            <div className={styles.tile}>
              <h4>Projects</h4>
              <a href="https://lanthan-electronics.com/">Lanthan Electronics</a>
              <a href="https://luminous-griffin-0f56ed.netlify.app/">
                Budget calculator
              </a>
              <a href="https://super-malasada-fcd6cd.netlify.app/">
                Currency calculator
              </a>
            </div>
            <div className={styles.tile}>
              <h4>Contact</h4>
              <a className={styles.contactLink} href="tel:+48502932625">
                <BsTelephone />
                +48 502 932 625
              </a>
              <a
                href="mailto:kiedrowska.ania@gmail.com"
                className={styles.contactLink}
              >
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
