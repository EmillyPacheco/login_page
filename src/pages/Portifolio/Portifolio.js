import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import styles from './portifolio.module.scss'
import animationStyles from './main_animation.module.scss';
import img_logo from '../../img_gpt_2.png'

function Portifolio() {
    return <>
        <main>
        <img id="img_logo" src={img_logo} alt=''></img>
        <div id='animation'>
            <div className='loader'>
                <div className={animationStyles.dotone}></div>
                <div className={animationStyles.dottwo}>-  -</div>
                <div className={animationStyles.dotthree}></div>
            </div>
        </div>
        <div id="infos">
            <h2 id={'first_name'}>{'EMILLY'}</h2>
            <h2 id={'last_name'}>{'PACHECO'}</h2>
        <p id="description">
            Como estudante de Técnico em Informática para Internet no Senac - FB, estou
            desenvolvendo habilidades em desenvolvimento web. <br />&nbsp;Tenho experiência
            prática em HTML, CSS e JavaScript, permitindo-me criar interfaces de usuário
            responsivas e dinâmicas.<br /> Além disso, possuo conhecimento em Python,
            ampliando minhas capacidades para o desenvolvimento back-end e automação de
            processos. Aberta a oportunidades de estágio ou posições júnior que me permitam
            contribuir e continuar aprendendo no campo da tecnologia.
        </p>
        </div>

        </main>
         
        <footer>

        <button className={'footer_btn'} id={'btn_github'} >
         <FontAwesomeIcon icon={faGithub} />
        </button>
         <button className={'footer_btn'} id={'btn_linkedIn'}>
         <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
         <button className={'footer_btn'} id={'btn_insta'} >
         <FontAwesomeIcon icon={faInstagram} />
        </button>
        </footer>

    </>

}


export default Portifolio;