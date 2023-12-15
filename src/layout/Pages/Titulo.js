import style from './Titulo.module.css'
import capa from '../helpers/img/capa2.jpg'


function Titulo() {
    return (
        <div className={style.slide1}>
            <div className={style.divTitulo}>
                <h1 className={style.tituloPortifolio}>PORTIFÓLIO</h1>
                <h1 className={style.tituloName}>LUIZ HENRIQUE</h1>    
             </div>
            <div className={style.divImage}><img className={style.image} src={capa} alt='capa'></img></div>
        </div>
    )
}

export default Titulo