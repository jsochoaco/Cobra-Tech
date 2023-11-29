import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import "./Home.css"


const Home = () => {
    const userData = useSelector((state) => state.userLoginNow)
    return (
        <>
        <div className="divContenedor">
            <NavBar/>
            <div className="divBienvenido">
                <h1 className="titulo">Integración Tecnologica CobraCarbonFiber</h1>
                <img className="logo" src="https://res.cloudinary.com/dfmsezslx/image/upload/v1701214127/Lateral_negro_hvwm55.png" alt="LogoRefriActive" />
                <h2 className="subtitulo">¡Bienvenido de nuevo <strong>{userData.name + " " + userData.surname}</strong>!</h2>
                <h3 className="subtitulo2">¿Qué quieres hacer hoy?</h3>
                <div className="botones">
                    <NavLink to={"/ordenes"}>
                      <button className="internSectionButtoms"> Ordenes </button>
                    </NavLink>
                </div>
            </div>
        </div>
        </>

    )
}

export default Home