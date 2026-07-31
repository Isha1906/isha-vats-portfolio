import resume from "./assets/Isha Vats Resume.pdf";
import "../style/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
    <div className="container">
    <h1>Hi, I’m Isha Vats</h1>
      <p>Data Analyst | SQL | Advanced Excel | Database Management</p>
      <p>I enjoy transforming raw data into meaningful insights using SQL, Excel, and Power BI. 
      My work focuses on data cleaning, analysis, reporting, 
      and building interactive dashboards to support business decision-making.</p>
      <a href={resume} download className="btn btn-success">
        Download Resume
      </a>
    </div>
      
    </section>
  );
};

export default Hero;
