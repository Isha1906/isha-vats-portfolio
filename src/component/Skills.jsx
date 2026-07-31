import "../style/Skill.css"

const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
     <div className="skills-list">
      <div className="skill-box">
      <p><b>Data Analytics:</b> 
         SQL, Advance Excel, Power BI, Data Cleaning & Reporting</p>
      </div>
      <div className="skill-box">
      <p><b>Database:</b> 
      MySQL, Relational Database Design, ER Diagrams  </p>
      </div>
      <div className="skill-box">
      <p><b>Programming:</b> 
      Java, Python, HTML/CSS, JavaScript</p>
      </div>
      <div className="skill-box">
      <p><b>Tools:</b> 
      MySQL Workbench, GitHub, MS Excel, Google Sheets, Eclipse, VS Code</p>
      </div>
     </div>
    </section>
  );
};

export default Skills;
