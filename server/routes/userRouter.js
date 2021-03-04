const Router = require("express");
const router = new Router();
const UserController = require("../controllers/UserController");
const authMiddleware = require("../midddleware/authMiddleware");

router.post("/signIn", UserController.login);

router.post("/signUp", UserController.registration);

router.get("/auth", authMiddleware, UserController.checkUser);


module.exports = router;
