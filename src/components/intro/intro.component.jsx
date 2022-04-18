import "./intro.styles.css";
import HeroImg from "../../assets/img/hero-img.svg"

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-opener">Hi, my name is</h2>
          <h1 className="intro-name">Edgar Acuna</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Engineer</div>
              <div className="intro-title-item">Lifelong Learner</div>
            </div>
          </div>
          <div className="intro-description">
            I design and develop services for customers of all sizes, specializing
            in creating stylish, modern websites.
          </div>
        </div>
      </div>
      <div className="intro-right">
        <img className="hero-img" alt="Man programming on computer" src={HeroImg} />
      </div>
    </div>
  )
}

export default Intro