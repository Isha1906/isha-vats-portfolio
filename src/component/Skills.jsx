import "../style/Skill.css"

const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
     <div className="skills-list">
      <div className="skill-box">
      <p><b>Frontend:</b> HTML, CSS, Javascript, React, Angular, Bootstrap</p>
      </div>
      <div className="skill-box">
      <p><b>Backend:</b> Java, Spring Boot, Hibernate, PHP</p>
      </div>
      <div className="skill-box">
      <p><b>Database:</b> MySQL</p>
      </div>
      <div className="skill-box">
      <p><b>Tools:</b> Git, GitHub, Postman</p>
      </div>
     </div>
    </section>
  );
};

export default Skills;
