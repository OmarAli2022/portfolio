import "./intro.css";
import Me from "../../img/Omar-proffs.jpg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Omar Ali</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">System developer</div>
              <div className="i-title-item">Software developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Web Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I develop and design applications for customers of all sizes,
            specializing in creating software and system solutions, monitoring
            performances and modifying programs as needed. 
          </p>
        </div>
        </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;