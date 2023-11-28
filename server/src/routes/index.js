const { Router } = require("express");
const router = Router();
const {orderRouters} = require("./orderRouters")



router.use("/orders", orderRouters )

module.exports = router