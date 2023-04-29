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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { API_LINK } from "../default-value";
import axios from "axios";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const SignIn = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDIEwH17xMKbdEBocOz2TrrrrnOYTsqd1k",
    authDomain: "leageoflegendd.firebaseapp.com",
    projectId: "leageoflegendd",
    storageBucket: "leageoflegendd.appspot.com",
    messagingSenderId: "840664973088",
    appId: "1:840664973088:web:2d61fe2cd84408ad11a145",
    measurementId: "G-QV2TTM7B8X",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
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
  const clickGoogle = () => {
    signInWithPopup(auth, provider).then((data: any) => {
      const userData = data.user.reloadUserInfo;
      if (userData) {
        const fetchData = async () => {
          const res = await axios.post(
            `${API_LINK}/auth/loginGoogle`,
            userData
          );
          localStorage.setItem("accessToken", res.data.token.accessToken);
          navigator("/");
        };
        fetchData();
      }
    });
  };
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
                <div
                  className="media-item google-item"
                  onClick={() => clickGoogle()}
                >
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
                <Link
                  to={"/register"}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Create account
                </Link>
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
