import {Link} from 'react-router-dom'
import style from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={style.navBar}>
            <div className={style.div}>
                <p>Opa</p>
            </div>
            <ul className={style.ul}>
                <li className={style.li}>
                    <Link to='/' className={style.ul}><spam className={style.menuTitulo}>Quem sou eu</spam></Link>
                </li>
                <li className={style.li}>
                    <Link to='/login'><spam className={style.menuTitulo}>Trabalhos </spam></Link>
                </li>
                <li className={style.li}>
                    <Link to='/register'><spam className={style.menuTitulo}>Contato</spam></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar