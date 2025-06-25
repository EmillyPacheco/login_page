import { Link } from "react-router-dom";
import styles from "./header.module.scss"

function Header() {
    return<>
    <header className={styles.Header}>
        <Link className={styles.BtnHeader} to={'/home'}> HOME </Link>
        <Link className={styles.BtnHeader} to={'/'}> LOGIN </Link>
        <Link className={styles.BtnHeader} to={'/portifolio'}> PORTIFOLIO </Link>
    </header>
    </>
}

export default Header;