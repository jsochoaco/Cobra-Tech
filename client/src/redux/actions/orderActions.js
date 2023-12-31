import { ALL_ORDER } from "../action-types";
import { url } from "../../App.js";
import axios from "axios";

export const getOrders = () => {
    return async (dispatch) => {
        try {
            const config = {
                method: 'get',
                url: `${url}/orders`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'cobra2023'
                }
            };
            const response = await axios(config);
            const data = response.data; // No necesitas await aquí, ya que response.data no es una Promesa
            dispatch({
                type: ALL_ORDER,
                payload: data.allElements
            });
        } catch (error) {
            const errorResponse = {};
            errorResponse.error = error.message;
            console.error("Error fetching orders:", errorResponse);
            return errorResponse;
        }
    };
};
