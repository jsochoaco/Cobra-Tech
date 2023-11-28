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
                    {/* <NavLink to="/">
                        <img className={style.logo} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tiktok.com%2F%40cobracarbonfiber%2Fvideo%2F7289891926118059269&psig=AOvVaw0BV5nnewFojU6CsPc-LwSp&ust=1701226538103000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDx3-3Y5YIDFQAAAAAdAAAAABAE" alt="LogoRefriActive" />
                    </NavLink> */}
                </div>
                <div className={style.datasection}>
                    <div className={style.userinfo}>
                        <p className={style.name}><img className={style.logoUser} src="https://api.iconify.design/material-symbols:person.svg?color=%23fcfcfc" alt="user" />{userData.name + " " + userData.surname}</p>
                        <p className={style.email}>{userData.email}</p>
                        <p className={style.profile}> <strong>Perfil:</strong> {userData.profile}</p>
                    </div>
                    {/* <button className={style.button} onClick={logout}><img className={style.logoUser} src="https://api.iconify.design/material-symbols:logout.svg?color=%23fcfcfc" alt="logout" />Salir</button> */}
                </div>
            </div>
        </div>
    )
}
export default SuperiorBar