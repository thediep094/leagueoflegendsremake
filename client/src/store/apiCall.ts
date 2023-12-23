import { loginStart, loginSuccess, loginFailure } from "./slice/accountSlice";
import axios from "axios";
import { API_LINK } from "../default-value";
import { fetchSuccess } from "./slice/cartSlice";

export const login = async (dispatch: any, user: any) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${API_LINK}/auth/login`, {
      username: user.username,
      password: user.password,
    });
    dispatch(loginSuccess(res.data.user));
    localStorage.setItem("accessToken", res.data.token.accessToken);

    alert("Đăng nhập thành công");
  } catch (error: any) {
    dispatch(loginFailure());
    alert(error.response.data.message);
  }
};

export const register = async (dispatch: any, user: any) => {
  dispatch(loginStart());
  try {
    if (user.ingame) {
      const res = await axios.post(`${API_LINK}/users/`, {
        fullname: user.fullname,
        username: user.username,
        password: user.password,
        date: user.date,
        mail: user.mail,
        ingame: user.ingame,
        mainAva: `https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${1}.png`,
      });
      await axios.get(`${API_LINK}/ingame/search?summonerName=${user.ingame}`);
      await axios.post(`${API_LINK}/rank/search/`, {
        username: user.username,
      });
      dispatch(loginSuccess(res.data.user));
      alert("Tạo tài khoản thành công");
    }
  } catch (error: any) {
    alert(error.response.data.message);
    throw error;
  }
};

export const getDataFromAccessToken = async (
  dispatch: any,
  accessToken: any
) => {
  dispatch(loginStart());
  try {
    const res = await axios.get(`${API_LINK}/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    try {
      const resCart = await axios.post(
        `${API_LINK}/cart/`,
        {
          verify_id: accessToken,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      dispatch(fetchSuccess(resCart.data.cart._id));
    } catch (error) {}
    dispatch(loginSuccess(res.data.user));
  } catch (error) {
    dispatch(loginFailure());
    localStorage.removeItem("accessToken");
    alert("Đăng nhập thất bại");
  }
};
