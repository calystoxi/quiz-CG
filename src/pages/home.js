import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenue au Quiz de Culture Générale</h1>
      <Link to="/quiz">
        <button>Commencer le quiz</button>
      </Link>
    </div>
  );
}

