module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0bc6c11b178fdbb1f8c83a4e8e4e4d2d'),
    },
  },
});
