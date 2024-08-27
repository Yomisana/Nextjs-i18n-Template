import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  trailingSlash: true,
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
