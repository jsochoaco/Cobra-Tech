const {Order} = require("../db.js")

const createOrder = async (datos) => {
    try {
        const newOrder = await Order.create({data: datos})
        return newOrder
    } catch (error) {
        console.error("Error fetching", error);
        throw error; 
    }
}

const getOrders = async () => {
    try {
        const orders = await Order.findAll()
        return orders
    } catch (error) {
        console.error("Error fetching", error);
        throw error;
    }
}
const updateOrder = async (datos, id) => {
    try {
        const externalNumber = id
        const order = await Order.findByPk(externalNumber)
        if(order) {
            order.actual_event = datos.actual_event
            order.data = datos.data
            await bill.save()
        }
        else {
            return null
        }
    }
    catch (error) {
        console.error("Error fetching", error);
        throw error;
    }
}


module.exports = {
    createOrder,
    updateOrder,
    getOrders
}