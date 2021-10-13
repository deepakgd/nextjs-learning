module.exports = {
  rewrites: async () => {
    return [
      {
        source: '/strapi/:path*',
        destination: `${process.env.API_BASE_URL}/:path*`
      }
    ];
  },
}
