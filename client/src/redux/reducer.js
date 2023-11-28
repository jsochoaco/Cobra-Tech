import { LOGIN, LOGOUT, SET_LOGIN_STATUS, SET_USER_DATA, USER_EXIST, ALL_CLIENTS, GET_CITYS, GET_DEPARTMENTS, ALL_ORDER } from "./action-types"



const initialState = {
    login: null,
    userExist: null,
    userLoginNow: {},
    allClients: [],
    allDeparments: [],
    allCitys: [],
    allOrders: []
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN: {
        return {
          ...state,
          login: action.payload.success,
          userLoginNow: action.payload.userLogin
        };
      }
      case USER_EXIST: {
        return {
          ...state,
          userExist: action.payload.success
        }
      }
      case LOGOUT: {
        return {
          ...state,
          login: action.payload
        }
      }
      case SET_USER_DATA: { 
      return {
        ...state,
        userLoginNow: action.payload,
      }};
      case SET_LOGIN_STATUS: {
        return {
          ...state,
          login: action.payload,
      }};
      case ALL_CLIENTS: {
        return {
          ...state,
          allClients: action.payload.clients
        }
      }
      case GET_CITYS: {
        return {
          ...state,
          allCitys: action.payload.citys
        }
      }
      case GET_DEPARTMENTS: {
        return {
          ...state,
          allDepartments: action.payload.departments
        }
      }
      case ALL_ORDER: {
        return {
          ...state,
          allOrders: action.payload.allElements
        }
      }
      default:
        return state; 
    }
  };
  
  export default rootReducer;