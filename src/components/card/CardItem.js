import { FaEdit, FaTrash } from "react-icons/fa";
import styles from './card_item.module.scss';

export default function CardItem({ cartao, onEdit, onDelete }) {
  return (
    <div className={styles.Card} style={{ backgroundColor: cartao.cor }}>
      {cartao.imagem && (
        <img
          src={cartao.imagem}
          alt="Imagem do cartão"
          className={styles.ImagemCartao}
        />
      )}
      <h4>{cartao.nome}</h4>
      <p>{cartao.descricao}</p>
      <div className={styles.Botoes}>
        <button className={`${styles.IconButton} ${styles.PencilButton}`} onClick={onEdit} title="Editar">
          <FaEdit size={20} />
        </button>
        <button className={`${styles.IconButton} ${styles.BinButton}`} onClick={onDelete} title="Excluir">
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
}
