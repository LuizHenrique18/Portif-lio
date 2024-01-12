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
                        <img src={instaImage} className={style.imageIcon}></img><a className={style.a} target='_blank'  href='https://www.instagram.com/luizhenriqel/'>Instagram</a>
                    </li>
                    <li className={style.li}>
                        <img src={wppImage} className={style.imageIcon}></img><a className={style.a} target='_blank'  href='https://wa.me/73999885682'>WhatsApp</a>
                    </li>
                    <li className={style.li}>
                        <img src={linkedinImage} className={style.imageIcon}></img><a className={style.a} target='_blank'  href='https://www.linkedin.com/in/luiz-henrique-lopes-9a8a37218/'>Linkedin</a>
                    </li>
                    <li className={style.li}>
                        <img src={gitImage} className={style.imageIcon}></img><a className={style.a} target='_blank'  href='https://github.com/LuizHenrique18'>GitHub</a>
                    </li>
                    <li className={style.li}>
                        <img src={ytbImage} className={style.imageIcon}></img><a className={style.a} target='_blank'  href='https://www.youtube.com/@LuizHenriqueLopesPereira'>YouTube</a>
                    </li>
                </ul>
        </div>
    )
}

export default Footer