module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e56f5556173110597f1c155d3993230d'),
  },
});
