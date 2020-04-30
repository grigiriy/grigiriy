module.exports = {
  siteName: 'Grigiriy. Digital artist / Web-developer',
  siteUrl: 'https://grigiriy.ru',
  icon: './src/assets/images/fav.png',
  plugins: [
    {
      use: 'gridsome-plugin-yandex-metrika',
      options: {
        id: '62421748',
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-164903006-1',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://grigiriy.ru',
        sitemap: 'https://grigiriy.ru/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
