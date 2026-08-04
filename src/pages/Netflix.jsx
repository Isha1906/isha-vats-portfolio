import "../style/Netflix.css";
import QueryCard from "../component/QueryCard";

const Netflix = () => {
    return (
        <section className="netflix-page">

            <div className="header">
                <h1>Netflix SQL Data Analysis</h1>

                <p>
                    This project demonstrates SQL-based analysis on a Netflix dataset.
                    Business questions were solved using MySQL to analyze genres,
                    ratings, and content trends through aggregation, filtering,
                    subqueries, and window functions.
                </p>
            </div>

            <div className="overview">

                <h2>Project Overview</h2>

                <p>
                    The objective of this project was to analyze Netflix content using SQL
                    and generate meaningful business insights from the dataset.
                </p>

            </div>

            <div className="tools">

                <h2>Tools Used</h2>

                <div className="badges">

                    <span>MySQL</span>

                    <span>SQL</span>

                    <span>MySQL Workbench</span>

                </div>

            </div>

            <div className="concepts">

                <h2>SQL Concepts Demonstrated</h2>

                <div className="badges">

                    <span>GROUP BY</span>

                    <span>HAVING</span>

                    <span>ORDER BY</span>

                    <span>LIMIT</span>

                    <span>COUNT()</span>

                    <span>AVG()</span>

                    <span>Subqueries</span>

                    <span>Window Functions</span>

                    <span>RANK()</span>

                </div>

            </div>

            <div className="questions">

                <h2>Business Questions Solved</h2>
                <QueryCard
                    title="Average IMDb Score by Genre"
                    difficulty="🟢 Basic"
                    concepts={["GROUP BY", "AVG()"]}
                    businessQuestion="What is the average IMDb score for each genre?"
                    sql={`SELECT genre, AVG(imdbscore) AS avg_rating 
                    FROM netflix 
                    GROUP BY genre;`}
                    explanation="This query calculates the average IMDb score for every genre, helping identify which genres consistently receive higher audience ratings."
                />

            </div>

        </section>
    );
};

export default Netflix;