import styles from './add_card.module.scss';

export default function AddCard({ onClick }) {
  return (
    <div className={`${styles.Card} ${styles.AddCard}`} onClick={onClick}>
      <h4>➕ Adicionar Cartão</h4>
    </div>
  );
}
