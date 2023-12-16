import React from '../helpers/img/reactjs.png'
import JavaScript from '../helpers/img/javascript-39404.png'
import NodeJs from '../helpers/img/Node.js_logo.svg'
import Html from '../helpers/img/html.png'
import Css from '../helpers/img/css.png'
 
import style from './Icon.module.css'


function Icon() {
    return (
        <div className={style.icon}>
            <img src={NodeJs}></img>
            <img src={React}></img>
            <img src={JavaScript}></img>
            <img src={Css}></img>
            <img src={Html}></img>
        </div>
    )
}

export default Icon