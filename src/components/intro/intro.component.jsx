import "./intro.styles.css";

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
              <div className="intro-title-item">Front End Developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-right">right</div>
    </div>
  )
}

export default Intro