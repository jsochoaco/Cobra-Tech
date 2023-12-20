import { USER_DATA, USER_EXIST, LOGIN, LOGOUT, SET_USER_DATA, SET_LOGIN_STATUS } from "../action-types";
import axios from "axios"
import {url} from "../../App.js";


export const loginUser = (userData) => {
    try {
        return async (dispatch) => {
            const config = {
                method: 'post',
                url: `${url}/users/login`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'cobra2023'
                },
                data: userData
            };
            const response = await axios(config)
            dispatch({
                type: LOGIN,
                payload: response.data
            })
        } 
    } catch (error) {
        const errorResponse = {};
        errorResponse.error = error.message;
        return errorResponse;    
    }
}

export const existUser = (email) => {
    try {
        return async (dispatch) => {
            const config = {
                method: 'get',
                url: `${url}/users/email/${email}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'cobra2023'
                },
            };
            const response = await axios(config)
            dispatch({
                type: USER_EXIST,
                payload: response.data
            })
        }     
    } catch (error) {
        const errorResponse = {};
        errorResponse.error = error.message;
        return errorResponse;   
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        dispatch({
            type: LOGOUT,
            payload: null
        })
    }  
}

export const setUserDatas = (userData) => {
    return {
      type: SET_USER_DATA,
      payload: userData,
    };
  };
  
  export const setLoginStatu = (loginStatus) => {
    return {
      type: SET_LOGIN_STATUS,
      payload: loginStatus,
    };
  };