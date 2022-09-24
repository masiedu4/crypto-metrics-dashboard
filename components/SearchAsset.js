/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 22/09/2022 - 14:57:36
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";
import NextPrevious from "./NextPrevious";

export const SearchAsset = ({ value, handleChange }) => {
  return (
    <>
      <div className="p-10 flex justify-center items-center relative ">
        <form>
          <input
            onChange={handleChange}
            value={value}
            type="text"
            className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Your favorite asset..."
          />
        </form>
      </div>
      <NextPrevious />
    </>
  );
};
