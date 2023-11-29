import { ALL_ORDER } from "../action-types";
import axios from "axios";
import { url } from "../../App.js";

export const getOrders = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${url}/orders`);  // Reemplazado el enlace directo con la variable 'url'
            dispatch({
                type: ALL_ORDER,
                payload: response.data.allElements
            });
        } catch (error) {
            const errorResponse = {};
            errorResponse.error = error.message;
            console.error("Error fetching orders:", errorResponse);
            return errorResponse;    
        }
    };
};