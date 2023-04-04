import { useState } from "react";
import "../styles/pages/signIn.scss";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div
      className="signIn"
      style={{
        backgroundImage: `url(https://lolstatic-a.akamaihd.net/rso-login-page/3.2.12/assets/lol_desktop_background_2x.jpg)`,
      }}
    >
      <div className="signIn__logo">
        <img src="/Logo/logo1.svg" alt="" />
      </div>
      <div className="sigIn__form">
        <form action="">
          <h1>LOGIN</h1>
          <div className="signIn__form__input">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUser({
                  ...user,
                  ["email"]: e.target.value,
                });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setUser({
                  ...user,
                  ["password"]: e.target.value,
                });
              }}
            />
          </div>
        </form>
        <div className="signIn__login">Login</div>
        <div className="signIn__text">
          <Link to="/">Back to Homepage</Link>
          <a href="#">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
