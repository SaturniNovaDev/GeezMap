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
    </div>
  );
}

export default Login;
