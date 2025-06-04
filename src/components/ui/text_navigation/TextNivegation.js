import styles from './text_navigation.module.scss'

function TextNavigation({ text }) {
    return <>
        <button className={styles.TextNavigation}>{text}</button>
    </>
}

export default TextNavigation