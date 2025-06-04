import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './button_icon.module.scss'

function ButtonIcon({ icon }) {
    return <>
        <button className={styles.ButtonIcon}>
            <FontAwesomeIcon icon={icon}/>
        </button>
    </>
}

export default ButtonIcon