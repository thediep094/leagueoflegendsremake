import React, { useEffect, useRef, useState } from "react";
import "../../styles/sections/teamPage/ChangeIcon.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_LINK } from "../../default-value";
import { RootState } from "../../store/store";
import { getDataFromAccessToken } from "../../store/apiCall";
import { FaTimes } from "react-icons/fa";
const ChangeIcon = ({ setIsLoading, setOpenChangeIconModal }: any) => {
  const user = useSelector((state: RootState) => state.account.user);
  const dispatch = useDispatch();
  const [currentIcons, setCurrentIcons] = useState<any[]>([]);
  const getIconsPurchase = async () => {
    try {
      if (user) {
        const res = await axios.get(`${API_LINK}/purchase-item/${user?._id}`);
        setCurrentIcons(res.data.data);
      }
    } catch (error) {}
  };

  const setIcon = async (icon: string) => {
    setIsLoading(true);
    try {
      if (user) {
        const res = await axios.put(
          `${API_LINK}/users/change-avatar/${user?._id}`,
          {
            newAvatar: `https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${icon}.png`,
          }
        );
        const userLocal = localStorage?.getItem("accessToken");

        if (userLocal) {
          getDataFromAccessToken(dispatch, userLocal);
        }
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIconsPurchase();
  }, [user]);

  return (
    <div className="change-icon__modal">
      <div className="change-icon__modal-content">
        <div className="change-icon__close">
          <FaTimes onClick={() => setOpenChangeIconModal(false)} />
        </div>

        <div className="change-icon__items row">
          {currentIcons.length > 0 &&
            currentIcons.map((icon) => {
              return (
                <div
                  className="change-icon__item col-lg-2 col-6 gap-2 mb-4"
                  onClick={() => setIcon(icon)}
                  key={icon}
                >
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/13.21.1/img/profileicon/${icon}.png`}
                    alt=""
                    loading="lazy"
                    className="change-icon__item-image"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ChangeIcon;
