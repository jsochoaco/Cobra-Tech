const { Router } = require("express");
const ordersRouters = Router();
const { updateOrderHandler, createOrderHandler, getAllOrders }= require("../handlers/orderHandlers")


ordersRouters.post("/create", createOrderHandler)
ordersRouters.patch("/update", updateOrderHandler)
ordersRouters.get("/", getAllOrders)

module.exports = ordersRouters

