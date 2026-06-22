import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
  },
  experimental: {
    nextScriptWorkers: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'mevaclinic.com',
          },
        ],
        destination: 'https://www.mevaclinic.com/:path*',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/hair-transplant',
        destination: '/:lang/treatments/meva-mixed-hair',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/treatments/hair-transplant',
        destination: '/:lang/treatments/meva-mixed-hair',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/gastric-sleeve',
        destination: '/:lang/treatments/gastric-sleeve',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/oncology',
        destination: '/:lang/treatments/smart-oncology-drugs',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/packages/gastric-balloon',
        destination: '/:lang/treatments/gastric-balloon',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/piezo-rhinoplasty',
        destination: '/:lang/treatments/piezo-rhinoplasty',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/undefined',
        destination: '/:lang/about-us',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/smart-oncology-drugs',
        destination: '/:lang/treatments/smart-oncology-drugs',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/despre-noi',
        destination: '/:lang/about-us',
        permanent: true,
      },
      {
        source: '/ro/implant-dentar',
        destination: '/ro/treatments/dental-implants',
        permanent: true,
      },
      {
        source: '/ro/oncologie',
        destination: '/ro/treatments/smart-oncology-drugs',
        permanent: true,
      },
      {
        source: '/ro/implant-par',
        destination: '/ro/treatments/meva-mixed-hair',
        permanent: true,
      },
      {
        source: '/ro/romani-istanbul',
        destination: '/ro/about-us',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/packages/breast-implants',
        destination: '/:lang/treatments/breast-augmentation',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/packages/liposuction-360',
        destination: '/:lang/treatments/vaser-liposuction',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/comparatie-medicala',
        destination: '/:lang/medical-comparison',
        permanent: true,
      },

      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/politica-confidentialitate',
        destination: '/:lang/privacy-policy',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/treatments/hair-transplant-dhi',
        destination: '/:lang/treatments/dhi-hair-transplant',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/treatments/hair-transplant-sapphire-fue',
        destination: '/:lang/treatments/meva-mixed-hair',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/treatments/gastric-balloon-allurion',
        destination: '/:lang/treatments/gastric-balloon',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/treatments/full-mouth-dental-implants',
        destination: '/:lang/treatments/all-on-4-dental',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/treatments/zirconium-dental-crowns',
        destination: '/:lang/treatments/zirconium-crowns',
        permanent: true,
      },
      {
        source: '/:lang(en|de|ro|es|it|ru|fr)/treatments/rhinoplasty-nose-job',
        destination: '/:lang/treatments/piezo-rhinoplasty',
        permanent: true,
      }
    ];
  },
};

export default withNextIntl(nextConfig);
