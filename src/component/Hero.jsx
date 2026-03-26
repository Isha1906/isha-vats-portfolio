import resume from "../assets/ISHA-VATS-SDE (1).pdf";
import "../style/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
    <div className="container">
    <h1>Hi, I’m Isha Vats</h1>
      <p>SDE FRESHER | Frontend Developer | MCA Graduate  </p>
      <p>Building responsive, user-friendly web interfaces using React</p>
      <a href={resume} download className="btn btn-success">
        Download Resume
      </a>
    </div>
      
    </section>
  );
};

export default Hero;
