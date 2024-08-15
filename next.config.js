/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ptBR', 'en'],
    defaultLocale: 'ptBR',
    localeDetection: false,
  },
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
