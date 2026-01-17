const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div style={card}>
        <h4>Ryze AI Website Redesign (Frontend Assignment)</h4>
        <p><b>Tech:</b> React, Javascript, HTML, CSS, Git, Vercel</p>
        <span>Frontend redesign assignment focused on improving UI, routing, and deployment.</span>
        <p>
        <ul type="disc">
          <li>Redesigned website layout using React and modern UI practices</li>
          <li>Implemented client-side routing for Features and Pricing pages</li>
          <li>Fixed deployment and routing issues on Vercel</li>
        </ul>
        </p>
        <p><a href="https://ryze-website-assignment.vercel.app" target="_blank">
          Ryze AI</a>
        </p>
        <p>
        <a href="https://github.com/Isha1906/ryze-website-assigment">Github Repo</a>
        </p>
          
      </div>

      <div style={card}>
        <h4>Hospital Management Website</h4>
        <p><b>Tech:</b> HTML, CSS, JavaScript, PHP, MySQL</p>
        <p>Responsive hospital website with form handling and database integration.</p>
      </div>

      <div style={card}>
        <h4>Grocery Store Management System</h4>
        <p><b>Tech:</b> Java, Swing, MySQL</p>
        <p>Desktop application with inventory and product management.</p>
      </div>

      <div style={card}>
        <h4>Food Ordering Application</h4>
        <p><b>Tech:</b> Spring Boot, Angular, MySQL</p>
        <p>Full-stack application with REST APIs and user management.</p>
        <a href="https://github.com/Isha1906/Food-Ordering-App" target="_blank">
          GitHub
        </a>
      </div>

      <div style={card}>
        <h4>PG Life Application</h4>
        <p><b>Tech:</b> React, PHP, MySQL</p>
        <p>PG accommodation platform with authentication and listings.</p>
      </div>
    </section>
  );
};

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.05)"
};

export default Projects;
