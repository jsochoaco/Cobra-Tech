const { createOrder, updateOrder, getOrders, sendMessage } = require("../controllers/orderControllers")

const createOrderHandler = async (req, res) => {
    try {
        const datos = req.body
        const newCreate = await createOrder(datos)
        if (!newCreate) {
            res.status(208).json({success: false, message: "No pudo ser creado"})
        }
        else {
            res.status(201).json({success: true, message: "Creado", created: newCreate})
            sendMessage(newCreate.data, newCreate.id)
        }
    } catch (error) {
        res.status(500).json({success: false, message: 'Error creating', error });
    }
}
const getAllOrders = async (req, res) => {
    try {
        const all = await getOrders()
        if (all.length > 0) {
            res.status(200).json({success: true, message: 'Succesfull', allElements: all})
        }
        else if (all.length === 0) {
            res.status(204).json({success: true, message: 'No find' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error get all', error });
    }
}

const updateOrderHandler = async (req, res) => {
    try {
        const data = req.body
        const event = data.eventData
        const id = event.externalOrderNumber
        const update = await updateOrder(data,id)
        if (update !== null) {
            res.status(200).json({success: true, updateElement: update, message: 'Succesfull'})
        }
        else if (preBillUpdate === null) {
            res.status(204).json({success: false, message: 'No find' })
        }
    }
    catch (error) {
        res.status(500).json({success: false, message: 'Error in update', error });
    }
}



module.exports = {
    createOrderHandler,
    updateOrderHandler,
    getAllOrders
}