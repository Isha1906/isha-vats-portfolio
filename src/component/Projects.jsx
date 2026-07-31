import "../style/Project.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="Project-List">

        {/* Future Power BI Project */}
        {/* <div className="card featured">
          <h4>Retail Sales Analytics Dashboard (Coming Soon)</h4>

          <p><b>Tech:</b> Excel, MySQL, Power BI</p>

          <ul>
            <li>Cleaning and validating raw retail sales datasets using Microsoft Excel.</li>
            <li>Performing SQL analysis to identify sales trends, customer behavior, and product performance.</li>
            <li>Building an interactive Power BI dashboard with KPIs, charts, and filters.</li>
            <li>Generating business insights to support operational decision-making.</li>
          </ul>

          <p><b>Status:</b> Currently Building</p>
        </div> */}

        {/* Netflix */}
        <div className="card">
          <h4>Netflix Data Analysis</h4>

          <p><b>Tech:</b> MySQL</p>

          <ul>
            <li>Imported and analyzed Netflix datasets using MySQL.</li>
            <li>Used JOIN, GROUP BY, ORDER BY, aggregate functions, and subqueries.</li>
            <li>Analyzed trends across genres, countries, and release years.</li>
            <li>Performed data validation to ensure reporting accuracy.</li>
          </ul>

          <a
            href="https://github.com/Isha1906"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>

        {/* Food2Go */}
        <div className="card">
          <h4>Food2Go Business Analysis</h4>

          <p><b>Tech:</b> Microsoft Excel</p>

          <ul>
            <li>Cleaned and validated operational datasets using Excel.</li>
            <li>Created Pivot Table reports to analyze sales and outlet performance.</li>
            <li>Applied VLOOKUP, SUMIF, COUNTIF, and Conditional Formatting.</li>
            <li>Generated business reports for operational insights.</li>
          </ul>

          <a
            href="https://github.com/Isha1906"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>

        {/* Employee */}
        <div className="card">
          <h4>Employee Management Database</h4>

          <p><b>Tech:</b> MySQL</p>

          <ul>
            <li>Designed a relational employee database.</li>
            <li>Created ER diagrams and normalized tables.</li>
            <li>Implemented CRUD operations.</li>
            <li>Developed SQL queries using joins, aggregate functions, and views.</li>
          </ul>

          <a
            href="https://github.com/Isha1906"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>

        {/* Food Ordering */}
        <div className="card">
          <h4>Food Ordering Application</h4>

          <p><b>Tech:</b> Spring Boot, Angular, MySQL</p>

          <ul>
            <li>Developed a full-stack food ordering application.</li>
            <li>Designed the backend database schema using MySQL.</li>
            <li>Implemented REST APIs for authentication and order management.</li>
            <li>Integrated Angular frontend with Spring Boot backend.</li>
          </ul>

          <a
            href="https://github.com/Isha1906/Food-Ordering-App"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;