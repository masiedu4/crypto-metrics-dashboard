/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 22/09/2022 - 14:19:30
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["assets.coingecko.com"],
  },
};

module.exports = nextConfig;
