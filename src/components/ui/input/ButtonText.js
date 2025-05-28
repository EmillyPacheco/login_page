import styles from'./ButtonText.module.scss'

function ButtonText({onClick, id}) {
    return <>
        <button
            id={id}
            onClick={onClick}
            className={styles.ButtonText}> 
            Esqueceu sua senha?
            </button>
    </>
}

export default ButtonText;

//   className="text-blue-500 text-sm cursor-pointer hover:underline"