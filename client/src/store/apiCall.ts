import { loginStart, loginSuccess, loginFailure } from "./slice/accountSlice";
import axios from "axios";
import { API_LINK } from "../default-value";
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
  } catch (error) {
    dispatch(loginFailure());
    alert("Đăng nhập thất bại");
  }
};

export const register = async (dispatch: any, user: any) => {
  dispatch(loginStart());
  try {
    if (user.ingame) {
      try {
        const res2 = await axios.get(
          `${API_LINK}/ingame/search?summonerName=${user.ingame}`
        );
        console.log({
          fullname: user.fullname,
          username: user.username,
          password: user.password,
          date: user.date,
          mail: user.mail,
          ingame: user.ingame,
          mainAva: res2.data.ingame.profileIconId
            ? `https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${res2.data.ingame.profileIconId}.png`
            : user.mainAva,
        });
        const res = await axios.post(`${API_LINK}/users/`, {
          fullname: user.fullname,
          username: user.username,
          password: user.password,
          date: user.date,
          mail: user.mail,
          ingame: user.ingame,
          mainAva: res2.data.ingame.profileIconId
            ? `https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${res2.data.ingame.profileIconId}.png`
            : user.mainAva,
        });
        try {
          alert("Tạo tài khoản thành công");
        } catch (error) {
          alert("Tạo tài khoản thất bại 1");
        }
      } catch (error) {
        alert("Không tồn tại tài khoản game này");
      }
      try {
        const res3 = await axios.post(`${API_LINK}/rank/search/`, {
          username: user.username,
        });
      } catch (error) {}
    }
  } catch (error) {
    dispatch(loginFailure());
    alert("Tạo tài khoản thất bại 2");
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
    dispatch(loginSuccess(res.data.user));
  } catch (error) {
    dispatch(loginFailure());
    localStorage.removeItem("accessToken");
    alert("Đăng nhập thất bại");
  }
};
