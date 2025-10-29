import "./Login.css";
import { useState } from "react";

function Login() {
  console.log("Login screen entered.");
  return (
    <div className="LoginScreen">
      <h2>Welcome to GeezMap</h2>
      <form className="LoginForm">
        <div className="UsernameField">
          <label>
            Email:
            <input type="email" name="username" />
          </label>
        </div>
        <div className="PasswordField">
          <label>
            Password:
            <input type="password" name="password" />
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
      <footer style={{ color: "#7d7d7d" }}>
        <p>&copy; 2025 GeezMap. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
