import "./about.css";
import Examen from "../../img/EXAMENSBEVIS.jpg";
import Omar from "../../img/Omar-original.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        <img src={Omar} alt="" className="i-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'am a software developer with good amount of skills.
        </p>
        <p className="a-desc">
          Omar is driven by his passion for understanding algorithms in programming. 
          He considers himself an "eternal student", eager to both build on his academic
          foundations in software development and stay in tune with the latest 
          technologies through continuing courses. Omar is currently working as a 
          system developer and is always interested in a challenge. Contact 
          omar.ali@omarabdiali.com to connect.
        </p>
        <div className="a-award">
          <img src={Examen} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Software developer diploma at EC Utbildning AB
            Växjö 2021</h4>
            <p className="a-award-desc">
              I've studied Java development between year 2019 to 2021 and specialized in 
              java as programming language.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;