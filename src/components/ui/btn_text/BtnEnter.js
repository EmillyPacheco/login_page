import styles from './btn_enter.module.scss'
function BtnEnter ({text}){
    return<>
    <button  className={styles.BtnEnter}>
        <h1>{text}</h1>
    </button>
    </>
}

export default BtnEnter;
