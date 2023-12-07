import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import { useState, useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import style from "./ordenes.module.css"
import * as actions from "../../redux/actions"


const Ordenes = () => {
    const dispatch = useDispatch()
    const orders = useSelector((state) => state.allOrdenes)
    const sortedOrders = [...orders].sort((ordenA, ordenB) => {
        // Comparar los IDs de orden de manera ascendente
        return ordenB.id - ordenA.id;
      });
    useEffect(()=> {
        dispatch(actions.getAllOrders())
      }, [dispatch])
    const [pagina, setPagina] = useState(1)
    const porPagina = 8
    const ultimoElemento = pagina*porPagina
    const primerElemento = ultimoElemento - porPagina
    const actualOrders = sortedOrders.slice(primerElemento, ultimoElemento)
    const totalPages = Math.ceil(sortedOrders.length / porPagina);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);}
    useEffect(() => {setPagina(1)}, [totalPages]);
    const maxPaginasAMostrar = 5; // Número máximo de páginas que se mostrarán en la barra de paginación
    const inicioPaginas =
    pagina <= Math.ceil(maxPaginasAMostrar / 2)
    ? 1
    : Math.max(1, pagina - Math.floor(maxPaginasAMostrar / 2))
    const finPaginas = Math.min(
        inicioPaginas + maxPaginasAMostrar - 1,
        totalPages
);
    return (
        <div className={style.divContenedor}>
            <NavBar/>
            <div className={style.divPrincipal}>
                <h1 className={style.tituloSeccion}>Ordenes</h1>
                <h4 className={style.subtitulo}>Todas las ordenes</h4>
                <div className={style.divTabla}>
                    <table className={style.table}>
                        <tr className={style.tr}> 
                        <th className={style.th}>#</th>
                        <th className={style.th}>Numero de orden externa</th>
                        <th className={style.th}>Evento actual</th>
                        <th className={style.th}>Estado</th>
                        </tr>
                        {actualOrders.map((orden) => (
                        <tr className={style.tr} key={orden.id}>
                          <td className={style.td}>{orden.id}</td>
                            <td className={style.td}>{orden.data.eventData.externalOrderNumber}</td>
                            <td className={style.td}>{orden.eventName}</td>
                            <td className={style.td}>{orden.data.eventData.sellOrderState.name}</td>
                        </tr>))}
                    </table>
                    {orders.length > 8 && 
                    <div className={style.paginado}>
                    <button
                      className={style.botonpag}
                      onClick={() => setPagina(pagina - 1)}
                      disabled={pagina === 1}
                    >
                      Anterior
                    </button>
                    {pageNumbers.slice(inicioPaginas - 1, finPaginas).map((pageNumber) => (
                      <button
                        key={pageNumber}
                        className={pageNumber === pagina ? style.pagina : style.paginaboton}
                        onClick={() => setPagina(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    ))}
                    <button
                      className={style.botonpag}
                      onClick={() => setPagina(pagina + 1)}
                      disabled={ultimoElemento >= orders.length}
                    >
                      Siguiente
                    </button>
                  </div>}
                </div>
            </div>
        </div>
    )
}

export default Ordenes