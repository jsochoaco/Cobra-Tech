import style from "./superiorBar.module.css"
import { useState , useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions"
import { useNavigate, NavLink} from "react-router-dom";


const SuperiorBar = () => {
    const userData = useSelector((state) => state.userLoginNow)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(actions.logout())
        navigate("/");
        window.location.reload();
    }
    return (
        <div className={style.superiorContenedor}>
            <div className={style.contenedorwith}>
                <div className={style.divImagen}>
                    <NavLink to="/">
                        <img className={style.logo} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1701212908/Lateral_blanco_hwh8ii.png" alt="LogoRefriActive" />
                    </NavLink>
                </div>
                <div className={style.datasection}>
                    <div className={style.userinfo}>
                        <p className={style.name}><img className={style.logoUser} src="https://api.iconify.design/material-symbols:person.svg?color=%23fcfcfc" alt="user" />{userData.name + " " + userData.surname}</p>
                        <p className={style.email}>{userData.email}</p>
                        <p className={style.profile}> <strong>Perfil:</strong> {userData.profile}</p>
                    </div>
                    <button className={style.button} onClick={logout}><img className={style.logoUser} src="https://api.iconify.design/material-symbols:logout.svg?color=%23fcfcfc" alt="logout" />Salir</button>
                </div>
            </div>
        </div>
    )
}
export default SuperiorBar