import { getOrders } from "./actions/orderActions"
import { loginUser, existUser, logoutUser, setUserDatas, setLoginStatu } from "./actions/userActions"

export const login = loginUser
export const exist = existUser
export const logout = logoutUser
export const setUserData = setUserDatas
export const setLoginStatus = setLoginStatu


export const getAllOrders = getOrders
