import style from './QuemSouEu.module.css'

function QuemSouEu() {
    return (
        <div className={style.divMain}>
            <div className={style.divTitle}>
                <h1>Quem Sou Eu?</h1>
            </div>
            <div className={style.divText}>
                <p>
                    Sou um jovem de 19 anos que trabalha e atualmente estuda ReactJS, NodeJS e JavaScript. Esse site inclusive foi feito com ReactJS. 
                </p>
                
                <p> 
                    Tenho como principais qualidades a proatividade, foco, vontade de estar sempre evoluindo e melhorando, trabalho em equipe, comunicação e responsabilidade, gosto de ser importante em tudo que faço, por isso não tenho problemas em aceitar responsabilidades e de lidar com pressão. Quer saber mais?  <a href='/'>Clique aqui!</a>
                </p>
            </div>
        </div>
    )

}

export default QuemSouEu