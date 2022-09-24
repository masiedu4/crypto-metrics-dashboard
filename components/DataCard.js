/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 22/09/2022 - 13:20:36
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/09/2022
 * - Author          : Michael
 * - Modification    :
 **/

import Image from "next/image";
import { FcAreaChart, FcBarChart, FcDoughnutChart } from "react-icons/fc";
import millify from "millify";

const styles = {
  wrapper: `m-6 max-w-xl bg-white rounded-lg shadow-xl`,
  wrapper2: `flex items-center justify-center p-5 space-x-5`,
  NamePriceWrapper: `flex flex-col space-y-2`,
  currencyName: `text-lg font-black text-gray-500`,
  currencyPrice: `text-sm text-gray-500`,
  dataWrapper: `flex flex-col space-y-2 pl-10`,
  dataCategoryWrapper: `flex items-center space-x-2`,
  dataCategoryIcon: `w-4 h-4`,
  dataCategoryText: `text-sm text-gray-500 font-bold`,
  dataCategoryValue: `text-xs  font-bold text-white bg-green-500 px-2 py-1 rounded-full`,
  redHrChangeValue: `text-xs font-bold text-white bg-red-500 px-2 py-1 rounded-full`,
  greenHrChange: `text-xs font-bold text-white bg-green-500 px-2 py-1 rounded-full`,
};
const DataCard = ({ assets }) => {
  const {
    name,
    current_price,
    image,
    max_supply,
    price_change_percentage_24h,
    market_cap,
    market_cap_rank,
  } = assets;
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper2}>
        <Image src={image} alt={name} width={50} height={50} />
        <div className={styles.NamePriceWrapper}>
          <h2 className={styles.currencyName}>
            {market_cap_rank}. {name}
          </h2>
          <p className={styles.currencyPrice}>
            ${current_price.toLocaleString()}
          </p>
        </div>
        <div className={styles.dataWrapper}>
          <div className={styles.dataCategoryWrapper}>
            <FcDoughnutChart className={styles.dataCategoryIcon} />
            <p className={styles.dataCategoryText}>Total Supply</p>
            <span className={styles.dataCategoryValue}>
              ${millify(max_supply)}
            </span>
          </div>
          <div className={styles.dataCategoryWrapper}>
            <FcAreaChart className={styles.dataCategoryIcon} />
            <p className={styles.dataCategoryText}>Market Cap</p>
            <span className={styles.dataCategoryValue}>
              ${millify(market_cap)}
            </span>
          </div>
          <div className={styles.dataCategoryWrapper}>
            <FcBarChart className={styles.dataCategoryIcon} />
            <p className={styles.dataCategoryText}>24h Change</p>
            {/* green when price > 0, red when price < 0 */}
            {price_change_percentage_24h < 0 ? (
              <span className={styles.redHrChangeValue}>
                {millify(price_change_percentage_24h, {
                  precision: 2,
                })}{" "}
                %
              </span>
            ) : (
              <span className={styles.greenHrChange}>
                {millify(price_change_percentage_24h, {
                  precision: 2,
                })}{" "}
                %
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
