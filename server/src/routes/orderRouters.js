const { Router } = require("express");
const ordersRouters = Router();
const { updateOrderHandler, createOrderHandler }= require("../handlers/orderHandlers")


ordersRouters.post("/create", createOrderHandler)
ordersRouters.patch("./update", updateOrderHandler)

module.exports = ordersRouters

