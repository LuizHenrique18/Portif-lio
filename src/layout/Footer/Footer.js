import style from './Footer.module.css'


//  Images
import wppImage from '../helpers/icons/whatsapp.png'
import instaImage from '../helpers/icons/instagram.png'
import linkedinImage from '../helpers/icons/linkedin.png'
import gitImage from '../helpers/icons/github.png'
import ytbImage from '../helpers/icons/youtube.png'


function Footer () {
    return (
        <div className={style.Footer}>
                <ul className={style.ul}>
                    <li className={style.li}> 
                        <img src={instaImage} className={style.imageIcon}></img><a className={style.a} href='/'>Instagram</a>
                    </li>
                    <li className={style.li}>
                        <img src={wppImage} className={style.imageIcon}></img><a className={style.a} href='/'>WhatsApp</a>
                    </li>
                    <li className={style.li}>
                        <img src={linkedinImage} className={style.imageIcon}></img><a className={style.a} href='/'>Linkedin</a>
                    </li>
                    <li className={style.li}>
                        <img src={gitImage} className={style.imageIcon}></img><a className={style.a} href='/'>GitHub</a>
                    </li>
                    <li className={style.li}>
                        <img src={ytbImage} className={style.imageIcon}></img><a className={style.a} href='/'>YouTube</a>
                    </li>
                </ul>
        </div>
    )
}

export default Footer