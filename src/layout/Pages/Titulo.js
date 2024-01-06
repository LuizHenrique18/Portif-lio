import { Link } from 'react-router-dom';

import style from './Titulo.module.css';
import capa from '../helpers/img/capa2.jpg';
import image from '../helpers/img/profile.png'

function Titulo() {
    return (
        <div className={style.slide1}>
            <div className={style.divImage}>
                <div className={style.divLeft}>
                    <h2 className={style.h2Titulo}>Olá, Seja Bem-vindo ao meu porfólio!</h2>
                    <Link className={style.buttao}> Entre </Link>
                </div>
                <div className={style.divRight}>
                    <div className={style.divMyImage}>
                        <img className={style.image} src={image}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Titulo