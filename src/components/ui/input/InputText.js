import styles from "./InputText.module.scss"

function InputText({text, id}) {
    return <>
        <input
            id={id}
            value={text}
            readOnly
            className={styles.InputText}>
        </input>
    </>
}

export default InputText;

//   className="text-blue-500 text-sm cursor-pointer hover:underline"