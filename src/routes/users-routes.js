import * as UserController from "../controllers/user-controller.js";

export default {
  healthCheck: {
    method: "GET",
    url: "/health",
    handler: (_, res) => {
      res.status(200).send();
    },
  },
  getAllUsers: {
    method: "GET",
    url: "/users",
    handler: UserController.index,
  },
};
