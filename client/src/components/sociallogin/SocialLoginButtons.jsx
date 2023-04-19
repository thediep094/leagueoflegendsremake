import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import AppleLogin from "react-apple-login";
import "./SocialLoginButtons.scss";

function SocialLoginButtons() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseApple = (response) => {
    console.log(response);
  };
  return (
    <div>
      <img
        className="login-icon"
        src="https://img.icons8.com/color/48/000000/google-logo.png"
        alt="Google"
      />

      <img
        className="login-icon"
        src="https://img.icons8.com/color/48/000000/facebook.png"
        alt="Facebook"
      />

      <img
        className="login-icon"
        src="https://cdn-icons-png.flaticon.com/512/731/731985.png"
        alt="Apple"
      />
    </div>
  );
}

export default SocialLoginButtons;
