const Router = require("express");
const router = new Router();
const taskRouter = require("./taskRouter");
const userRouter = require("./userRouter");

router.use("/", taskRouter);
router.use("/", userRouter);

module.exports = router;
