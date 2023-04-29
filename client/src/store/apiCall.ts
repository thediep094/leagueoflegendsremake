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
    const res3 = await axios.post(`${API_LINK}/rank/search/`, {
      username: user.username,
    });
    alert("Đăng nhập thành công");
  } catch (error) {
    dispatch(loginFailure());
    alert("Đăng nhập thất bại");
  }
};

export const register = async (dispatch: any, user: any) => {
  dispatch(loginStart());

  if (user.ingame) {
    const res2 = await axios.get(
      `${API_LINK}/ingame/search?summonerName=${user.ingame}`
    );
    const data2 = await res2.data?.ingame?.profileIconId;
    setTimeout(async () => {
      const res = await axios.post(`${API_LINK}/users/`, {
        fullname: user.fullname,
        username: user.username,
        password: user.password,
        date: user.date,
        mail: user.mail,
        ingame: user.ingame,
        mainAva: data2
          ? `https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${data2}.png`
          : user.mainAva,
      });
    }, 1000);

    alert("Tạo tài khoản thành công");
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
