import { Link } from 'react-router-dom'
import styles from './button_text.module.scss'

function ButtonText({ children, onClick }) {
    return <>
        <button onClick={onClick} className={styles.ButtonText}>{children}</button>
    </>
}

export default ButtonText