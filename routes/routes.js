const routes = require("express").Router();
const users = require("../controllers/user.controller");

routes.get("/", users.getUsers);
routes.get("/:identitynumber", users.getUserByIdentityNumber);
routes.get("/accNumber/:accnumber", users.getUserByAccountNumber);
routes.post("/createUser", users.createUser);
routes.put("/update/:id", users.updateUser);
routes.delete("/delete/:id", users.deleteUser);

module.exports = routes;