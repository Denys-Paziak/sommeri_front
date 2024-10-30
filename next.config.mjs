import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "185.233.117.23", "sommeri.com"],
  },
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
