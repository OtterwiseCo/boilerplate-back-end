import userRoutes from "./users-routes.js";

export const renderRoutes = [...Object.values(userRoutes)];

export default (fastify, opts, next) => {
  for (let route of renderRoutes) {
    fastify.route(route);
  }
  next();
};
