// Basic Lib Imports
const express = require('express');

const router = express.Router();

const userRouters = require('../module/user/user.route');
const authRouters = require('../module/auth/auth.route');

const moduleRoutes = [
  { path: '/auth', route: authRouters },
  { path: '/users', route: userRouters },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

module.exports = applicationRoutes = router;
