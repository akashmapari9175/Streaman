// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: "/docs/:path*",
//         destination: "/docs/index.html",
//         // destination: "/docs/:path*",
//       },
//     ];
//   },
// };

// export default nextConfig;

import { NextConfig } from "next";
import withPlugins from "next-compose-plugins";

const config: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/docs/:path*",
        destination: "https://my-monorepo-docusaurus.vercel.app/:path*",
      },
    ];
  },
};

export default withPlugins([], config);
