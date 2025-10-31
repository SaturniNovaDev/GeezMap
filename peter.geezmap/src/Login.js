import "./Login.css";
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const navigate = useNavigate();
  function validateLogin(e) {
    // prevent form submission reload
    if (e && e.preventDefault) e.preventDefault();

    const hardcodedEmail = "peterknows24@protonmail.com";
    const hardcodedPassword = "Izak09!";

    if (userEmail === hardcodedEmail && userPassword === hardcodedPassword) {
      setIsLoggedIn(true);
      setStatusMessage("Login successful!");
      navigate("/app");
    } else {
      setIsLoggedIn(false);
      setStatusMessage("Login failed. Please check email or password.");
    }
  }

  return (
    <div className="LoginScreen">
      <h1 className="title" style={{ fontFamily: "serif" }}>
        Welcome to GeezMap
      </h1>
      <form className="LoginForm" onSubmit={validateLogin}>
        <div className="EmailField">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userEmail}
              placeholder="someone@example.com"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="PasswordField">
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={userPassword}
              placeholder="Your password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="LoginButtonContainer">
          <button type="submit" className="LoginButton">
            Login
          </button>
        </div>
      </form>
      <p>Don't have an account?</p>
      <Link to={"/sign-up"} style={{ color: "#0f88c1ff", fontWeight: "bold" }}>
        <span>Sign up!</span>
      </Link>

      {/* status shown via React state */}
      <p
        style={{
          color: statusMessage ? (isLoggedIn ? "green" : "red") : undefined,
        }}
      >
        {statusMessage}
      </p>

      <footer style={{ color: "#7d7d7d" }}>
        <p>&copy; 2025 GeezMap. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
