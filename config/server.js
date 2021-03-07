module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  //  url: "http://localhost:1337/",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd6b726dfab3b9ffbeb465d37567d481f'),
    },
  },
});
