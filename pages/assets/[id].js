/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 03/10/2022 - 22:02:44
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 03/10/2022
 * - Author          : Michael
 * - Modification    :
 **/
import axios from "axios";
import React from "react";
import DataCard from "../../components/DataCard";

const styles = {
  main: `bg-gradient-to-r bg-gradient-to-r from-green-400 to-blue-400`,
  div: "flex items-center justify-center ",
  cardWrapper: "grid grid-cols-2 flex-wrap justify-center ",
};

export const getStaticPaths = async () => {
  const res = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false`
  );

  const assets = await res.data;

  const paths = assets.map((asset) => {
    return {
      params: { id: asset.id.toLocaleString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);

  const asset = await res.data;

  return {
    props: {
      asset,
    },
  };
};
const Details = ({ asset }) => {
  return (
    <main className={styles.main}>
      <h1> {asset.name}</h1>
    </main>
  );
};

export default Details;
