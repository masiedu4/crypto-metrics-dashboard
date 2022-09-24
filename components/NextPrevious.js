/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 23/09/2022 - 22:26:06
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 23/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";
import Link from "next/link";
const NextPrevious = () => {
  return (
    <div className="text-lg text-white space-x-3 font-bold flex justify-center items-center relative">
      <p> Page ...</p>
      <Link href="/assets">
        <p className=" cursor-pointer hover:text-blue-800 hover:underline underline-offset-8">
          1
        </p>
      </Link>
      <Link href="/assets/2">
        <p className=" cursor-pointer hover:text-blue-800 hover:underline underline-offset-8">
          2
        </p>
      </Link>
      <Link href="/assets/3">
        <p className=" cursor-pointer hover:text-blue-800 hover:underline underline-offset-8">
          3
        </p>
      </Link>
      <Link href="/assets/4">
        <p className=" cursor-pointer hover:text-blue-800 hover:underline underline-offset-8">
          4
        </p>
      </Link>
    </div>
  );
};

export default NextPrevious;
