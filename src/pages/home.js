import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bienvenue au Quiz de Culture Générale</h1>
      <Link to="/quiz"><button>Commencer le quiz</button></Link>
    </div>
  );
}
