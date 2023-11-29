import './App.css';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SuperiorBar from './components/SuperiorBar/SuperiorBar';
import Ordenes from './pages/Ordenes/Ordenes';
import * as actions from "./redux/actions"

export const url = "https://cobraserver.onrender.com"

const App = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login)
  const userData = useSelector((state) => state.userLoginNow)
  useEffect(() => {
    // Recuperar desde localStorage al cargar la aplicación
    const storedData = JSON.parse(localStorage.getItem("globalState")) || {};

    // Establecer userData y login en el estado global
    dispatch(actions.setUserData(storedData.userData || null));
    dispatch(actions.setLoginStatus(storedData.login || null));

    // Redirigir a la página de inicio de sesión si no hay inicio de sesión
    if (storedData.login !== true) {
      navigate("/login");
    }
  }, [dispatch, navigate]);
  const isLoginPage = location.pathname === "/login"
  useEffect(()=> {
    dispatch(actions.getAllOrders)
  }, [])
  useEffect(() => {
    // Guardar en localStorage cuando userData o login cambian
    const dataToStore = { userData, login };
    localStorage.setItem("globalState", JSON.stringify(dataToStore));
  }, [userData, login]);
  return (
    <div className='App'>
      {!isLoginPage && <SuperiorBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ordenes' element={<Ordenes />} />
      </Routes>
    </div>
  );
}

export default App;