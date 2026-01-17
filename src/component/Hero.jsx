import resume from "../assets/ISHA-VATS.pdf";
import "../style/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
    <div className="container">
    <h1>Hi, I’m Isha Vats</h1>
      <p>Frontend Developer | MCA Graduate  </p>
      <p>Building responsive, user-friendly web interfaces using React</p>
      <a href={resume} download>
        Download Resume
      </a>
    </div>
      
    </section>
  );
};

export default Hero;
