import "./Login.css";
import { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  function validateLogin(e) {
    // prevent form submission reload
    if (e && e.preventDefault) e.preventDefault();

    const hardcodedEmail = "peterknows24@protonmail.com";
    const hardcodedPassword = "Izak09!";

    if (userEmail === hardcodedEmail && userPassword === hardcodedPassword) {
      setIsLoggedIn(true);
      setStatusMessage("Login successful!");
      
    } else {
      setIsLoggedIn(false);
      setStatusMessage("Login failed. Please check email or password.");
    }
  }

  return (
    <div className="LoginScreen">
      <h2>Welcome to GeezMap</h2>
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
        <div className="LoginButton">
          <button type="submit">Login</button>
        </div>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="#sign-up" style={{ color: "#0f88c1ff", fontWeight: "bold" }}>
          Sign up!
        </a>
      </p>

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
