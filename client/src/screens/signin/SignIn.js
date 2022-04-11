import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./SignIn.css";
const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // Form submition
  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      alert("Invalid Email");
      return;
    }

    await axios
      .post("/auth/signin", {
        email: email.toLowerCase(),
        password,
      })
      .then(({ data: { message, error, user } }) => {
        if (error) {
          alert(error);
          return;
        } else {
          alert(message);
          localStorage.setItem("user", JSON.stringify(user));
          window.location = "/";
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="signin_page">
      <div className="signin">
        <h4>SignIn</h4>
        <form className="signin__form">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <button type="submit" onClick={onSubmit}>
            Continue
          </button>
        </form>
        <p className="register__user">
          <Link
            to="/signup"
            style={{ textDecoration: "none", marginBottom: "8px" }}
          >
            <span style={{ color: "grey" }}>Don't have an account</span>
            <strong className="register__user__signUp"> Sign Up</strong>
          </Link>
        </p>
      </div>
      <div className="temp_credentials">
        <p>tyagipratap111@gmail.com</p>
        <p>Qwert@9991</p>
      </div>
    </div>
  );
};

export default SignIn;
