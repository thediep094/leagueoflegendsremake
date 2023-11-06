import React, { Fragment, useEffect, useState } from "react";
import "../styles/pages/ShopIcons.scss";
import Modal from "@mui/material/Modal";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import { API_LINK } from "../default-value";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeBalance } from "../store/slice/walletSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ShopIcons = () => {
  const user = useSelector((state: RootState) => state.account.user);
  const [currentId, setCurrentId] = useState(4050);
  const [currentIcons, setCurrentIcons] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const maxIcons = 4159;
  const iconsPerPage = 24;
  const startingIcon = 4050;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end index for the current page
  const startIndex = startingIcon + (currentPage - 1) * iconsPerPage;
  const endIndex = Math.min(startIndex + iconsPerPage, maxIcons + 1);
  const getWallet = async () => {
    try {
      if (user) {
        const res = await axios.get(
          `${API_LINK}/wallet/get-wallet/${user?._id}`
        );
        dispatch(changeBalance(res.data.data.balance));
      }
    } catch (error) {}
  };
  const buyItem = async (iconId: number) => {
    if (user) {
      try {
        const res = await axios.post(`${API_LINK}/purchase-item`, {
          userId: user?._id,
          iconId: iconId,
        });
        handleClose();
        alert("Purchase item created successfully");
        getIconsPurchase();
        getWallet();
      } catch (error) {
        alert("Error!!!");
        handleClose();
      }
    } else {
      alert("You need to login!");
      handleClose();
    }
  };

  const getIconsPurchase = async () => {
    try {
      if (user) {
        const res = await axios.get(`${API_LINK}/purchase-item/${user?._id}`);
        setCurrentIcons(res.data.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getIconsPurchase();
  }, [user]);
  return (
    <div className="shop-icons">
      <div className="container">
        <div className="row">
          {Array.from({ length: endIndex - startIndex }).map((_, index) => {
            const iconId = startIndex + index;
            const checkExist =
              currentIcons.length > 0 &&
              currentIcons?.find((icon) => String(icon) === String(iconId));
            return (
              <div className="col-6 col-lg-3 mb-4" key={iconId}>
                <div
                  className={`icon-item ${checkExist ? "active" : ""}`}
                  onClick={() => {
                    if (!checkExist) {
                      handleOpen();
                    }
                    setCurrentId(iconId);
                  }}
                >
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/13.21.1/img/profileicon/${iconId}.png`}
                    alt=""
                    loading="lazy"
                    className="icon-item__image"
                  />
                  <div className="icon-item__price">
                    {!checkExist ? (
                      <Fragment>
                        <span>1000</span>
                        <img src="./BE_icon.png" alt="" />
                      </Fragment>
                    ) : (
                      <span>Purchased</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you want to buy?
            </Typography>
            <Stack direction="row" spacing={2} className="mt-4">
              <Button variant="contained" onClick={() => buyItem(currentId)}>
                Buy
              </Button>
              <Button variant="outlined" onClick={() => handleClose()}>
                Cancel
              </Button>
            </Stack>
          </Box>
        </Modal>
        {/* Pagination controls */}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(
                  prev + 1,
                  Math.ceil((maxIcons - startingIcon) / iconsPerPage)
                )
              )
            }
            disabled={
              currentPage ===
              Math.ceil((maxIcons - startingIcon) / iconsPerPage)
            }
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopIcons;
