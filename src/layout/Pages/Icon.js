import React from '../helpers/img/reactjs.png';
import JavaScript from '../helpers/img/javascript-39404.png';
import NodeJs from '../helpers/img/Node.js_logo.svg';
import Html from '../helpers/img/html.png';
import Css from '../helpers/img/css.png';
 
import style from './Icon.module.css';


function Icon() {
    return (
        <div className={style.icon}>
            <div className={style.divIcon}>
                <img className={style.img} src={NodeJs}></img>
            </div>
            <div className={style.divIcon}>
                <img className={style.img}  src={React}></img>
            </div>
            <div className={style.divIcon}>
                <img className={style.img}  src={JavaScript}></img>
            </div>
            <div className={style.divIcon}>
                <img className={style.img}  src={Css}></img>
            </div>
            <div className={style.divIcon}>
                <img className={style.img}  src={Html}></img>
            </div>
            
        </div>
    )
}

export default Icon