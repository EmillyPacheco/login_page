import { useState } from "react";
import { FixedSizeGrid } from "react-window";
import styles from './home.module.scss';

function Home({ alturaCartao = 120 }) {
  const [cartoes, setCartoes] = useState(
    Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      nome: `Cartão ${i + 1}`,
    }))
  );

  const handleAdd = () => {
    const novoId = cartoes.length + 1;
    const novoCartao = { id: novoId, nome: `Cartão ${novoId}` };
    setCartoes([...cartoes, novoCartao]);
  };

  const handleEdit = (id) => {
    const novoNome = prompt("Novo nome para o cartão:");
    if (!novoNome) return;
    setCartoes(prev =>
      prev.map(c => (c.id === id ? { ...c, nome: novoNome } : c))
    );
  };

  const handleDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Tem certeza que deseja apagar este cartão?")) {
      setCartoes(prev => prev.filter(c => c.id !== id));
    }
  };

  const totalCartoes = cartoes.length + 1; // +1 para o botão de adicionar

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 5 + columnIndex;
    if (index >= totalCartoes) return null;

    if (index === cartoes.length) {
      // Cartão "Adicionar"
      return (
        <div style={{ ...style, padding: "10px", boxSizing: "border-box" }}>
          <div className={`${styles.Card} ${styles.AddCard}`} onClick={handleAdd}>
            <h4>➕ Adicionar Cartão</h4>
          </div>
        </div>
      );
    }

    const cartao = cartoes[index];

    return (
      <div style={{ ...style, padding: "10px", boxSizing: "border-box" }}>
        <div className={styles.Card}>
          <h4>{cartao.nome}</h4>
          <div className={styles.Botoes}>
            <button onClick={() => handleEdit(cartao.id)}>✏️</button>
            <button onClick={() => handleDelete(cartao.id)}>🗑️</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <FixedSizeGrid
      columnCount={5}
      columnWidth={250}
      rowCount={Math.ceil(totalCartoes / 5)}
      rowHeight={300}
      height={1000}
      width={5 * 250}
      className={styles.Grind}
    >
      {Cell}
    </FixedSizeGrid>
  );
}

export default Home;




