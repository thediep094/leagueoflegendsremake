import { Fragment, useState, useEffect } from "react";
import "../styles/pages/signIn.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/apiCall";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { FaUserAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { RiArrowRightLine } from "react-icons/ri";
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
      {/* <div
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
          </form>
          <div className="signIn__login" onClick={() => handleLogin()}>
            Login
          </div>
          <div className="signIn__text">
            <Link to="/">Back to Homepage</Link>
            <a href="#">Create an account</a>
          </div>
        </div>
      </div> */}
      <div className="signIn">
        <section className="page">
          <div className="login_section">
            <div>
              <img
                width="150"
                src="https://blog.aevo.com.br/wp-content/uploads/2020/09/riot-games-inovacao-radical.png"
                alt="Logo Riot Games"
              />
            </div>
            <h1>LOGIN</h1>
            <div>
              <form>
                <div className="input_field">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        ["username"]: e.target.value,
                      });
                    }}
                  />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="input_field">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        ["password"]: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </form>

              <div className="social-media-login">
                <div className="media-item fb-item">
                  <BsFacebook className="icon" />
                </div>
                <div className="media-item google-item">
                  <FcGoogle className="icon" />
                </div>
                <div className="media-item apple-item">
                  <AiFillApple className="icon" />
                </div>
              </div>

              {/* <div className="save-login">
                <input type="checkbox" id="checkbox" name="save_login" />
                <label htmlFor="checkbox">Manter login</label>
                <FaCheck className="check-icon" />
              </div> */}
            </div>

            <div className="login-sucess" onClick={() => handleLogin()}>
              <RiArrowRightLine className="icon" />
            </div>

            <div className="other-actions">
              <div>
                <div>Create account</div>
                <div>V1.0.0</div>
              </div>
            </div>
          </div>
          <div className="img_login_section">
            <video autoPlay loop muted disablePictureInPicture>
              <source
                src={process.env.PUBLIC_URL + "/VideoBG/urf.webm"}
                type="video/webm"
              />
            </video>
          </div>
        </section>

        <div className="user-button">
          <FaUserAlt className="icon icon-user" />
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;
