import { Fragment, useState, useEffect } from "react";
import "../styles/pages/signIn.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/apiCall";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import SocialLoginButtons from "../components/sociallogin/SocialLoginButtons";
import { RootState } from "../store/store";
const SignIn = () => {
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });
  const accessToken = localStorage.getItem("accessToken");
  const user = useSelector((state: RootState) => state.account.user);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    login(dispatch, {
      username: userForm.username,
      password: userForm.password,
    });
  };
  useEffect(() => {
    if (accessToken) {
      navigator("/");
    }
  }, [accessToken]);
  return (
    <Fragment>
      <Header />
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
                  setUserForm({
                    ...userForm,
                    ["username"]: e.target.value,
                  });
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setUserForm({
                    ...userForm,
                    ["password"]: e.target.value,
                  });
                }}
              />
            </div>
            {/* <label>
              <input type="checkbox" />
              Lưu mật khẩu
            </label> */}
            {/* <SocialLoginButtons /> */}
          </form>
          <div className="signIn__login" onClick={() => handleLogin()}>
            Login
          </div>
          <div className="signIn__text">
            <Link to="/">Back to Homepage</Link>
            <a href="#">Create an account</a>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignIn;
