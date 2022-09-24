/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 23/09/2022 - 22:09:53
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 23/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
import { useState } from "react";
import axios from "axios";
import DataCard from "../../components/DataCard";
import { SearchAsset } from "../../components/SearchAsset";
import NextPrevious from "../../components/NextPrevious";

const styles = {
  main: `bg-gradient-to-r bg-gradient-to-r from-green-400 to-blue-400`,
  div: "flex items-center justify-center ",
  cardWrapper: "grid grid-cols-2 flex-wrap justify-center ",
};

export default function Home({ allAssets, pageAssets }) {
  // this is an implemented search logic
  const [assetData, setAssetData] = useState("");

  function handleAssetSearch(e) {
    setAssetData(e.target.value);
  }

  // this function will filter the data in {assets} props
  // ...and match the name against the searched Asset

  // even though we have 30 assets per page..
  // ..we want the user to be able to search through and..
  // .. get any of the 100 the assets

  const filtered = allAssets.filter((asset) =>
    asset.name.toLowerCase().includes(assetData.toLowerCase())
  );

  return (
    <main className={styles.main}>
      <SearchAsset value={assetData} handleChange={handleAssetSearch} />
      <main className={styles.div}>
        <div className={styles.cardWrapper}>
          {/* if search is empty, render 30 assets(pageAssets)..
          if not search through filtered 100 assets(allAssets)*/}

          {assetData === ""
            ? pageAssets.map((asset) => (
                <DataCard key={asset.id} assets={asset} />
              ))
            : filtered.map((asset) => (
                <DataCard key={asset.id} assets={asset} />
              ))}
        </div>
      </main>
      {assetData != "" && <NextPrevious />}
    </main>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false`
  );

  const assets = await res.data;

  return {
    props: {
      allAssets: assets,
      pageAssets: assets.splice(0, 30),
    },
  };
}
