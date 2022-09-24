/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 22/09/2022 - 22:30:20
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";
import Link from "next/link";

const styles = {
  main: `h-full bg-gradient-to-r bg-gradient-to-r from-green-400 to-blue-400`,
  div: "p-24 flex items-center justify-center ",
  textWrapper: "m-24 justify-center text-white",
  headerText: `text-3xl text-center font-bold`,
  text: `text-xl text-gray-200 cursor-pointer underline underline-offset-8 mt-12 text-center font-bold`,
};
const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <div className={styles.textWrapper}>
          <p className={styles.headerText}>
            CryptoNite is a real-time and up-to-date metrics dashboard that
            displays accurate data of the leading 150 cryptocurrencies in simple
            and detailed charts.
          </p>
          <Link href="/assets">
            <p className={styles.text}>
              Check out how your favorite asset is performing here.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
