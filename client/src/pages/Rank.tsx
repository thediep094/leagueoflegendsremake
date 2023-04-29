import React, { useEffect, useState } from "react";
import RankingTable from "../sections/rankingTable/RankingTable";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import axios from "axios";
import { API_LINK } from "../default-value";
import { IRank } from "../types/rank";
import Loading from "../components/Loading";
import Button from "../components/button/Button";
const Rank: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [ranksList, setRanksList] = useState<IRank[]>();
  const [flex, setFlex] = useState(false);
  const fetchDataSolo = async () => {
    setLoading(true);
    const res = await axios.get(`${API_LINK}/rank/solo/`);
    const filterData = res.data.data.filter((item: IRank) => item.user[0]?._id);
    setRanksList(filterData);
    setLoading(false);
    setFlex(false);
  };

  const fetchDataFlex = async () => {
    setLoading(true);
    const res = await axios.get(`${API_LINK}/rank/flex/`);
    const filterData = res.data.data.filter((item: IRank) => item.user[0]?._id);
    setRanksList(filterData);
    setLoading(false);
    setFlex(true);
  };

  useEffect(() => {
    fetchDataSolo();
  }, []);

  return (
    <div className="rank">
      <Header />
      <div className="container">
        <h1 className="rank__title">League of Legends Ranking</h1>
        <h2 className="rank__subtitle">
          {!flex ? "Rank Solo" : "Rank Flex"}(From all user have ingame)
        </h2>
        <h3 className="rank__subtitle">
          If you don't have a game account, then Clone Account is the account of
          all users who don't have a game account
        </h3>
        <div
          className="rank__button-change"
          onClick={() => {
            !flex ? fetchDataFlex() : fetchDataSolo();
          }}
        >
          {!flex ? <Button name="Flex rank" /> : <Button name="Solo rank" />}
        </div>
        {loading ? (
          <div
            style={{
              position: "relative",
            }}
          >
            <Loading />
          </div>
        ) : (
          <RankingTable teams={ranksList} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Rank;
