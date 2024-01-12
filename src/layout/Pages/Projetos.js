import style from './Projetos.module.css';

// capa dos vídeos
import image1 from '../helpers/videoImages/image1.jpg';
import image2 from '../helpers/videoImages/image2.jpg';
import image3 from '../helpers/videoImages/image1.jpg';

function Projetos () {
    return (
        <div className={style.divBody}>
            <div className={style.divMain}>
                <div className={style.divYouTube}>
                    <h1 className={style.tituloYouTube}>Interface do Twitter</h1>
                    <p className={style.textYouTube}>Vídeo mostrando detalhadamente como funciona a interface do twitter. </p>
                    <a href=''><img alt='vídeo' src={image1} className={style.videoYouTube}></img> </a>
                    <p className={style.linkToGitHub}>Link do repositório no GitHub, <a href=''>Clique Aqui!</a></p>
                </div>

                <div className={style.divYouTube}>
                    <h1 className={style.tituloYouTube}>Interface do Twitter</h1>
                    <p className={style.textYouTube}>Vídeo mostrando detalhadamente como funciona a interface do twitter. </p>
                    <a href=''><img alt='vídeo' src={image2} className={style.videoYouTube}></img> </a>
                    <p className={style.linkToGitHub}>Link do repositório no GitHub, <a href=''>Clique Aqui!</a></p>
                </div>

                <div className={style.divYouTube}>
                    <h1 className={style.tituloYouTube}>Interface do Twitter</h1>
                    <p className={style.textYouTube}>Vídeo mostrando detalhadamente como tabom não sei oque vamos verfunciona a interface do twitter. </p>
                    <a href=''><img alt='vídeo' src={image1} className={style.videoYouTube}></img> </a>
                    <p className={style.linkToGitHub}>Link do repositório no GitHub, <a href='https://github.com/LuizHenrique18/Portifolio' target='_blank'>Clique Aqui!</a></p>
                </div>
            </div>
        </div>
    
    )
    
}

export default Projetos