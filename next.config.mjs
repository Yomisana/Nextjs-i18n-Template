import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This base Path will be at
  // https://<username>.github.io/yomisana-nextjs-template
  basePath: "/yomisana-nextjs-template",
  output: "export",
  reactStrictMode: true,

  experimental: {
    turbo: {
      resolveAlias: {
        "next-intl/config": "./src/i18n.js",
      },
    },
  },
};

export default withNextIntl(nextConfig);
