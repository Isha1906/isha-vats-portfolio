
import { useState } from "react";
import "../style/QueryCard.css";

const QueryCard = ({
  title,
  difficulty,
  concepts,
  businessQuestion,
  sql,
  explanation,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="query-card">

      <div
        className="query-header"
        onClick={() => setOpen(!open)}
      >
        <div>

          <h3>{title}</h3>

          <p className="difficulty">{difficulty}</p>

        </div>

        <button>
          {open ? "Hide SQL ▲" : "View SQL ▼"}
        </button>

      </div>

      {open && (

        <div className="query-content">

          <h4>Business Question</h4>

          <p>{businessQuestion}</p>

          <h4>SQL Concepts</h4>

          <div className="concept-tags">

            {concepts.map((item, index) => (
              <span key={index}>{item}</span>
            ))}

          </div>

          <h4>SQL Query</h4>

          <pre>
            <code>{sql}</code>
          </pre>

          <h4>Explanation</h4>

          <p>{explanation}</p>

        </div>

      )}

    </div>
  );
};

export default QueryCard;