import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="LandingPage">
      <h1>Welcome to GeezMap</h1>
      <p>Your go-to app for mapping and geolocation posts!</p>
      <h2>More than just a map</h2>
      <p>
        With GeezMap, you can explore new places, share your experiences, and
        connect with others through geotagged posts.
      </p>
      <Link to="/login">
        <button className="GetStartedButton">Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
