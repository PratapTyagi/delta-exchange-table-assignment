import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./SignUp.css";
const SignUp = () => {
  const history = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      alert("Wrong email format");
      return;
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    )
      return alert(
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );

    let {
      data: { message, error },
    } = await axios.post("/auth/signup", {
      email: email.toLowerCase(),
      password,
    });
    if (error) return console.log(error);
    alert(message);

    // Sign in after sign up
    let { data } = await axios.post("/auth/signin", {
      email: email.toLowerCase(),
      password,
    });

    if (data.error) return alert(data.error);
    alert(data.message);
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location = "/";
  };

  return (
    <div className="register_page">
      <div className="register">
        <h4>Register</h4>
        <form className="register__form" onSubmit={onSubmit}>
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
        <p className="signin__user">
          Already have an account
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <strong className="signin__user__signin"> Sign In</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
