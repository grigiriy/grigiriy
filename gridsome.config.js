module.exports = {
  siteName: 'Grigiriy. Digital artist / Web-developer',
  // siteUrl: 'https://www.gridsome.org',
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
  ],
};
