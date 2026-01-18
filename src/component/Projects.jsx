import "../style/Project.css"

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="Project-List">
        <div className="card">
          <h4>Ryze AI Website Redesign (Frontend Assignment)</h4>
          <p><b>Tech:</b> React, Javascript, HTML, CSS, Git, Vercel</p>
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
            <a href="https://github.com/Isha1906/ryze-website-assignment">Github Repo</a>
          </p>

        </div>
        <div className="card">
          <h4>PG Life Application</h4>
          <p><b>Tech:</b> React, PHP, MySQL</p>
          <p>
            <ul type="disc">
              <li>Developed a PG accommodation platform for students and working professionals</li>
              <li>Implemented user authentication (login/signup) and session handling</li>
              <li>Integrated backend APIs using PHP and MySQL for data storage and retrieval</li>
              <li>Designed responsive UI using React for better user experience</li>
              <li>Future scope: payment integration and booking management</li>
            </ul>
          </p>
        </div>
        <div className="card">
          <h4>Food Ordering Application</h4>
          <p><b>Tech:</b> Spring Boot, Angular, MySQL</p>
          <p>
            <ul type="disc">
              <li>Developed a full-stack food ordering application using Spring Boot and Angular</li>
              <li>Created REST APIs for authentication, menu, and order management</li>
              <li>Implemented role-based access for admin and users</li>
              <li>Built responsive UI for browsing menus and placing orders</li>
              <li>Integrated MySQL database for users, food items, and orders</li>
              <li>Handled frontend-backend communication using HTTP services</li>
            </ul>
          </p>
          <a href="https://github.com/Isha1906/Food-Ordering-App" target="_blank">
            GitHub
          </a>
        </div>
        <div className="card">
          <h4>Hospital Management Website</h4>
          <p><b>Tech:</b> HTML, CSS, JavaScript, PHP, MySQL</p>
          <p>Responsive hospital website with form handling and database integration.</p>
        </div>
        <div className="card">
          <h4>Grocery Store Management System</h4>
          <p><b>Tech:</b> Java, Swing, MySQL</p>
          <p>Desktop application with inventory and product management.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
