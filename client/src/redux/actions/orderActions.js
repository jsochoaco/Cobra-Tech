import { ALL_ORDER } from "../action-types";
import axios from "axios"
import {url} from "../../App.js";


export const getOrders = () => {
    try {
        return async (dispatch) => {
            const response = await axios.get(
                `${url}/orders/`
            )
            dispatch({
                type: ALL_ORDER,
                payload: response.data
            })
        } 
    } catch (error) {
        const errorResponse = {};
        errorResponse.error = error.message;
        return errorResponse;    
    }
}
