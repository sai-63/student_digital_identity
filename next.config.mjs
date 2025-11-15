import withPWA from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,

  // Must be an object to silence Turbopack’s warning
  turbopack: {},

  // next-pwa requires webpack
  webpack: (config) => {
    return config;
  },
};

export default withPWA({
  dest: "public",
  disable: !isProd,
  https: {
    selfSigned: false,
  },
})(nextConfig);

