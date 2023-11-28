import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import { useState, useEffect } from "react"
import { useSelector} from "react-redux"
import style from "./home.module.css"


const Home = () => {
    const orders = useSelector((state) => state.allOrders)
    const [pagina, setPagina] = useState(1)
    const porPagina = 8
    const ultimoElemento = pagina*porPagina
    const primerElemento = ultimoElemento - porPagina
    const actualQuotes = orders.slice(primerElemento, ultimoElemento)
    const totalPages = Math.ceil(orders.length / porPagina);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);}
    useEffect(() => {setPagina(1)}, [totalPages]);
    return (
        <div className={style.divContenedor}>
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
                        {orders.map((orden) => (
                        <tr className={style.tr} key={orden.id}>
                          <td className={style.td}>{orden.id}</td>
                            <td className={style.td}>{orden.externalOrderNumber}</td>
                            <td className={style.td}>{orden.actual_event}</td>
                            <td className={style.td}>{orden.data.eventData.sellOrderState.name}</td>
                        </tr>))}
                    </table>
                    {orders.length > 8 && 
                    <div className={style.paginado}>
                        <button className= {style.botonpag} onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}> Anterior </button>
                        {pageNumbers.map((pageNumber) => (
                        <button key={pageNumber} className={pageNumber === pagina ? style.pagina : style.paginaboton} onClick={() => setPagina(pageNumber)}>{pageNumber}</button>))}
                        <button className= {style.botonpag} onClick={() => setPagina(pagina + 1)} disabled={ultimoElemento >= orders.length}>Siguiente</button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Home