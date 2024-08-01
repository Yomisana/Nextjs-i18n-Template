import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // This base Path will be at
  // https://<username>.github.io/yomisana-nextjs-template
  basePath: "/nextjs-i18n-template",
  trailingSlash: true,
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
