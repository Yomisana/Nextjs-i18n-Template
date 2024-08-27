import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nextjs-i18n-template",
  trailingSlash: true,
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
