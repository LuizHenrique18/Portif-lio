import { Link } from 'react-router-dom'

import style from './Titulo.module.css'
import capa from '../helpers/img/capa2.jpg'


function Titulo() {
    return (
        <div className={style.slide1}>
            <div className={style.divImage}>
                <div className={style.divLeft}>
                    <Link className={style.buttao}> Entre </Link>
                </div>
                <div className={style.divRight}>
                    <div className={style.divTitulo}>
                        <h1 className={style.titulo}>
                            PORTIFÓLIO
                        </h1>
                        <h1 className={style.tituloName}>
                            LUIZ HENRIQUE
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Titulo