import { ALL_ORDER } from "../action-types";
import { url } from "../../App.js";

export const getOrders = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${url}/orders`);
            
            if (!response.ok) {
                throw new Error(`Error fetching orders: ${response.statusText}`);
            }

            const data = await response.json();

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