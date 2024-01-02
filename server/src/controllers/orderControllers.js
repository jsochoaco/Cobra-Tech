const {Order} = require("../db.js")
require("dotenv").config(); //Dependencia para leer archivo .env
const { API_KEY_MELONN, TOKEN_META } = process.env;

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

const sendMessage = async (datos, id) => {
    try {
        const internalId = id
        const data = datos
        if (data.eventName === "SELL_ORDER/RECEIVED_VALID") {
            const external = data.eventData.externalOrderNumber
            const axios = require('axios');
            const apiUrl = `https://api.melonn.com/prod/api/sell-orders/${external}`;
            const apiKey = API_KEY_MELONN
            try {
                const response = await axios.get(apiUrl, {
                    headers: {
                        'Accept': 'application/json',
                        'X-Api-Key': apiKey
                    }
                });
                const datosOrden = response.data
                const dataMensaje = {
                    messaging_product: "whatsapp",
                    to: datosOrden.buyer.phoneNumber.replace(/\+/g, ''),
                    type: "template",
                    template: {
                        name: "novedad",
                        language: {
                            code: "es"
                        },
                        components: [
                        {type: "body",
                        parameters: [
                        {
                            type: "text",
                            text: datosOrden.buyer.fullName
                        },
                        {
                            type: "text",
                            text: datosOrden.trackingUrl
                        }
                        ]}
                        ]
                    }
                }
                const urlWpp = "https://graph.facebook.com/v17.0/226749307187508/messages"
                const bearToker = TOKEN_META
                const headers = {
                    'Authorization': `Bearer ${bearToker}`,
                    'Content-Type': 'application/json'
                };
                const responseWpp = await axios.post(urlWpp, dataMensaje, { headers });
                // const {data} = responseWpp
                // const result = data.messages !== undefined && data.messages.message_status

            }
            catch (error) {
                console.error('Error al hacer la solicitud:', error.message);
            }
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
    getOrders,
    sendMessage
}