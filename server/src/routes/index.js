const { Router } = require("express");
const router = Router();
const ordersRouters = require("./orderRouters")



router.use("/orders", ordersRouters )

module.exports = router