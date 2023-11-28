import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, Link } from "react-router-dom";
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./login.module.css"
const Login = () => {
    const login = useSelector((state) => state.login)
    const userExiste = useSelector((state) => state.userExist)
    const [existe, setExiste] = useState(null);
    const [emailInput, setEmailInput] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [clientPass, setClientPass] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        setClientPass(login)
    }, [login])
    useEffect(() => {
        setExiste(userExiste)
    }, [userExiste])
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = (e) => {
        setEmailInput(e.target.value)
        if (existe === true && e.target.value === "") {
            setExiste(null)
            setClientPass(null)
        }
        if (existe === false && e.target.value === "") {
            setExiste(null)
            setClientPass(null)
        }
    }
    const userClient = (emailInput, e) => {
        e.preventDefault()
        if (emailInput !== "") dispatch(actions.exist(emailInput))
    }
    const handleChangePass = (e) => {
        setPassword(e.target.value);
    }
    const loginComplete = (emails, passwords, event) => {
        event.preventDefault()
        const data = { email: emails, password: passwords }
        dispatch(actions.login(data))
    }
    const handleRedirect = () => {
        if (clientPass) {
            navigate("/")
        }
    };
    return (
        <div className={style.contenedorMayor}>
            <div className={style.contenedor} >
                <img className={style.logo} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1700522308/TECDE/RefriActive_Img_zfhpl2.png" alt="LogoRefriActive" />
                <h1 className={style.titulo}>¡Bienvenido de nuevo!</h1>
                <h5 className={style.subtitulo}>Ingrese sus credenciales</h5>
                <form>
                    <div className={style.form}>
                        <input type="text" name="email" defaultValue={""} onChange={(e) => handleChange(e)} placeholder="Correo electronico"/>
                        {existe !== true ? (<button className={style.formbutton} disabled={emailInput === ""} onClick={(event) => userClient(emailInput, event)}>Siguiente</button>) : (null)}
                        {existe === false ? (
                        <div className={style.divmensaje} >
                            <span className={style.span}>
                                &#9888; Este usuario no es administrador
                            </span>
                        </div>) : null}
                        {existe === true ? (
                            <div className={style.passwordcontainer}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); handleChangePass(e) }}
                                />
                                <div className={style.passwordtoggle} onClick={togglePasswordVisibility}>
                                    {showPassword ? (<><img className={style.imgen} src="https://api.iconify.design/material-symbols:visibility-off-outline.svg?color=%233cbbed" alt="eyeopne" /></>) : (<><img className={style.imgen} src="https://api.iconify.design/material-symbols:visibility-outline.svg?color=%233cbbed" alt="eyeopne" /></>)}
                                </div>
                            </div>
                        ) : null}
                        {existe === true ? (<NavLink to="/dashboard"> <button className={style.formbutton} onClick={(event) => loginComplete(emailInput, password, event)}>Iniciar sesión</button></NavLink>
                        ) : (null)}
                        {clientPass === false ? (
                            <div className={style.divmensajePass}>
                                <span className={style.span}> &#9888; Contraseña incorrecta </span>
                            </div>) : (null)}
                        <div className={style.divOpciones}>
                        <Link to='/reset' className={style.olvido}><span>Solicitar cambio de contraseña</span></Link>
                        </div>
                        {handleRedirect()}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
