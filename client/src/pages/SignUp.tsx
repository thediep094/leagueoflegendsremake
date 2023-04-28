import { Fragment, useState, useEffect } from "react";
import "../styles/pages/signIn.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/apiCall";
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

const SignUp = () => {
  const [userForm, setUserForm] = useState({
    fullname: "",
    username: "",
    password: "",
    date: "",
    mail: "",
    ingame: "",
    mainAva:
      "	https://ddragon-webp.lolmath.net/latest/img/profileicon/5710.webp",
  });
  const accessToken = localStorage.getItem("accessToken");
  const user = useSelector((state: RootState) => state.account.user);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    register(dispatch, {
      fullname: userForm.fullname,
      username: userForm.username,
      password: userForm.password,
      date: userForm.date,
      mail: userForm.mail,
      ingame: userForm.ingame ? userForm.ingame : "Clone Account",
      mainAva: userForm.mainAva,
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
            <h1>Register</h1>
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
                <div className="input_field">
                  <input
                    type="text"
                    name="mail"
                    id="mail"
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        ["mail"]: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor="fullname">Email</label>
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        ["fullname"]: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor="fullname">Fullname</label>
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    name="ingame"
                    id="ingame"
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        ["ingame"]: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor="ingame">Ingame name</label>
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    name="date"
                    id="date"
                    onChange={(e) => {
                      setUserForm({
                        ...userForm,
                        ["date"]: e.target.value,
                      });
                    }}
                    required
                  />
                  <label htmlFor="date">Date</label>
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
            </div>

            <div className="login-sucess" onClick={() => handleLogin()}>
              <RiArrowRightLine className="icon" />
            </div>

            <div className="other-actions">
              <div>
                <Link to={"/login"}>Already have an account?</Link>
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

export default SignUp;
