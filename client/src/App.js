import './App.css';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SuperiorBar from './components/SuperiorBar/SuperiorBar';
import * as actions from "./redux/actions"

export const url = "http://localhost:3001"

const App = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login)
  const userData = useSelector((state) => state.userLoginNow)
  // useEffect(() => {
  //   // Recuperar desde localStorage al cargar la aplicación
  //   const storedData = JSON.parse(localStorage.getItem("globalState")) || {};

  //   // Establecer userData y login en el estado global
  //   dispatch(setUserData(storedData.userData || null));
  //   dispatch(setLoginStatus(storedData.login || null));

  //   // Redirigir a la página de inicio de sesión si no hay inicio de sesión
  //   if (storedData.login !== true) {
  //     navigate("/login");
  //   }
  // }, [dispatch, navigate]);
  const isLoginPage = location.pathname === "/login"

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
      </Routes>
    </div>
  );
}

export default App;