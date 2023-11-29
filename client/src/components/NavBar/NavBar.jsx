import { useState } from "react";
import style from "./navbar.module.css"
import { NavLink, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const NavBar = () => {
    const location = useLocation().pathname
    const userData = useSelector((state) => state.userLoginNow)

    return (
        <div className={style.contenedorDiv}>
            {location !== "/" && 
            <div className={style.divSeccion}>
                <NavLink to="/">
                    <button className={location === "/" ? (style.botonSeccion):(style.botonNoSeccion)} aria-haspopup="true" data-toggle="dropdown"> Inicio </button>
                </NavLink>
            </div>}
            <div className={style.divSeccion}>
                <NavLink to="/ordenes">
                    <button className={location === "/ordenes" ? (style.botonSeccion):(style.botonNoSeccion)} aria-haspopup="true" data-toggle="dropdown"> Ordenes </button>
                </NavLink>
            {/* {location === "/ordenes" && (<div className={style.desplegable}>
            <buttom>Crear servicio</buttom>
            <buttom>Compacto</buttom>
            <buttom>Resumen</buttom>
            </div>)} */}
            </div>
        </div>
        );
}

export default NavBar


// const [openServicesReports, setOpenServicesReports] = useState(false)
// const [openReports, setOpenReports] = useState(false)
// const [openQuotes, setOpenQuotes] = useState(false)
// const menuServiceReports = () => {
//     setOpenServicesReports(!openServicesReports)
//     if (openQuotes === true || openReports === true) {
//         setOpenQuotes(false)
//         setOpenReports(false)
//     }
// }
// const menuReports = () => {
//     setOpenReports(!openReports)
//     if (openQuotes === true || openServicesReports === true) {
//         setOpenQuotes(false)
//         setOpenServicesReports(false)
//     }
// }
// const menuQuotes = () => {
//     setOpenQuotes(!openQuotes)
//     if (openReports === true || openServicesReports === true) {
//         setOpenReports(false)
//         setOpenServicesReports(false)
//     }
// }