const { Router } = require("express");
const router = Router();
const ordersRouters = require("./orderRouters")
const usersRouter = require("./userRouters")



router.use("/orders", ordersRouters )
router.use("/users", usersRouter)

module.exports = router