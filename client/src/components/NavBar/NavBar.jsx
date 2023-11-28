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
                <NavLink to="/">
                    <button disabled className={location === "/services" ? (style.botonSeccion):(style.botonNoSeccion)} aria-haspopup="true" data-toggle="dropdown"> Servicios </button>
                </NavLink>
            {location === "/services" && (<div className={style.desplegable}>
            <buttom>Crear servicio</buttom>
            <buttom>Compacto</buttom>
            <buttom>Resumen</buttom>
            </div>)}
            </div>
            <div className={style.divSeccion}>
                <NavLink to="/">
                    <button disabled className={location === "/reports" ? (style.botonSeccion):(style.botonNoSeccion)} aria-haspopup="true" data-toggle="dropdown"> Reportes </button>
                </NavLink>
            {location === "/reports" && (<div className={style.desplegable}>
            <buttom>Crear reporte</buttom>
            <buttom>Compacto</buttom>
            <buttom>Resumen</buttom>
            </div>)}
            </div>
            <div className={style.divSeccion}>
                <NavLink to="/quotes">
                    <button className={location.includes("/quotes") ? (style.botonSeccion):(style.botonNoSeccion)} aria-haspopup="true" data-toggle="dropdown"> Cotizaciones </button>
                </NavLink>
                {location.includes("/quotes") && (
                <div className={style.desplegable}>
                    <NavLink to={"/quotes/create"}>
                        <buttom className={ location.includes("/quotes/create") ? style.botonSecundarioSelect: style.botonSecundario}>Crear cotización</buttom>
                    </NavLink>
                    <NavLink to={"/quotes/user/"+ userData.id}>
                        <buttom className={ location.includes("/quotes/user/") ? style.botonSecundarioSelect: style.botonSecundario}>Mis cotizaciones</buttom>
                    </NavLink>
                    <NavLink to={"/quotes/all"}>
                        <buttom className={ location.includes("/quotes/all") ? style.botonSecundarioSelect: style.botonSecundario}>Resumen</buttom>
                    </NavLink>
                </div>)}
            </div>
            <div className={style.divSeccion}>
                <NavLink to="/data">
                    <button className={location === "/data" ? (style.botonSeccion):(style.botonNoSeccion)} aria-haspopup="true" data-toggle="dropdown"> Añade datos </button>
                </NavLink>
            {location.includes("/data") && (<div className={style.desplegable}>
                <NavLink to={"/quotes/create"}>
                    <buttom className={ location.includes("/quotes/create") ? style.botonSecundarioSelect: style.botonSecundario}>Repuestos</buttom>
                </NavLink>
                <NavLink to={"/quotes/user/"+ userData.id}>
                    <buttom className={ location.includes("/quotes/user/") ? style.botonSecundarioSelect: style.botonSecundario}>Servicios</buttom>
                </NavLink>
                <NavLink to={"/data/client"}>
                    <buttom className={ location.includes("/data/client") ? style.botonSecundarioSelect: style.botonSecundario}>Clientes</buttom>
                </NavLink>
                <NavLink to={"/quotes/all"}>
                    <buttom className={ location.includes("/quotes/all") ? style.botonSecundarioSelect: style.botonSecundario}>Almacenes</buttom>
                </NavLink>
            </div>)}
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