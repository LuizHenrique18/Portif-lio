import style from './Experiences.module.css'

function Experiences () {
    return (
        <div className={style.divBody}>
            <div className={style.divMain}>
                <div className={style.divTitle}>
                    <h1 className={style.h1Titulo}>Experiências que me fizeram quem sou</h1>
                </div>
                <div className={style.divText}>
                    <p>
                        Durante meu tempo na União Solar evoluí em diversas questões profissionais e como ser humano, lá aprendi sobre trabalho em equipe, concentração/foco e aprendizado de novas funções. Isso foi muito importante no meu desenvolvimento, já que me exigiu um olhar resiliente e desafiador para estar sempre positivo na resolução de novos problemas e para lidar com pressões, sou grato por esse tempo que estou aqui.
                    </p>
                    <p>
                        Em outubro de 2022 tive a oportunidade de trabalhar na recepção da LUVEP, uma das maiores empresas de carros e principalmente caminhões do Brasil, durante meu tempo lá, tive a oportunidade de desenvolver muitas softskills, como comunicação, inteligência emocional e responsabilidades. Estava cumbrindo férias, tive a oportunidade de continuar por lá, mas optei por sair para encontrar uma vaga onde pudesse evoluir e me desenvolver naquilo que gosto.
                    </p>
                </div>
            </div>
        </div>
        
    )
}

export default Experiences