import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenue au Quiz de Culture Générale</h1>
      <p className="home-description">
        Testez vos connaissances avec 10 questions variées. Bonne chance !
      </p>
      <Link to="/quiz" className="start-link">
        <button className="start-button" aria-label="Commencer le quiz">
          Commencer le quiz
        </button>
      </Link>
    </div>
  );
}
