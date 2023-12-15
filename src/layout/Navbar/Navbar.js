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
                    <Link to='/' className={style.ul}>Quem sou eu</Link>
                </li>
                <li className={style.li}>
                    <Link to='/login'>Trabalhos</Link>
                </li>
                <li className={style.li}>
                    <Link to='/register'>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar