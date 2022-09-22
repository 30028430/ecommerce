import React, { useState } from "react";
import "./login.css";
import loginimg from "./images/LOGOFORLOGIN.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })

      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={loginimg} />
      </Link>

      <div className="login_container">
        <h1> Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signbutton">
            Sign in{" "}
          </button>
        </form>
        <p>
          By signing in you agree to the SHOPIT condition to use and sale , and
          you agree to the terms and condition of privact notice and cookies and
          agree to see the internet ads
        </p>
        <button onClick={register} className="login_registerbutton">
          Create you SHOPIT account
        </button>
      </div>
    </div>
  );
}

export default Login;
