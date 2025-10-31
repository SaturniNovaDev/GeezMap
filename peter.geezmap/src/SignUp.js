import "./SignUp.css";
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

function SignUp() {
  return (
    <div className={"SignUp-screen"}>
      <h1>Under construction</h1>
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/f/f4/Faenza-applications-development.svg"
        }
        alt={"Under construction"}
        width={"250px"}
      />
      <div className={"copyright-area"}>
        <span>SVG asset copyright: </span>
        <text className="subtext">
          By Matthieu James
          <br />
          <a
            href={
              "https://code.google.com/archive/p/faenza-icon-theme/downloads"
            }
          >
            https://code.google.com/archive/p/faenza-icon-theme/downloads
          </a>
          ,<br />
          GPL, <br />
          <a href={"https://commons.wikimedia.org/w/index.php?curid=68976976"}>
            https://commons.wikimedia.org/w/index.php?curid=68976976
          </a>
        </text>
      </div>
    </div>
  );
}
export default SignUp;
