import { useState } from "react";
import { FixedSizeGrid } from "react-window";
import styles from './home.module.scss';

function Home({ alturaCartao = 120 }) {
  const [cartoes, setCartoes] = useState(
    Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      nome: `Cartão ${i + 1}`,
      descricao: "",
      cor: "#ffffff"
    }))
  );

  const [cartaoEditando, setCartaoEditando] = useState(null);
  const [formulario, setFormulario] = useState({
    nome: "",
    descricao: "",
    cor: "#ffffff"
  });

  const handleAdd = () => {
    const novoId = cartoes.length + 1;
    const novoCartao = {
      id: novoId,
      nome: `Cartão ${novoId}`,
      descricao: "",
      cor: "#ffffff"
    };
    setCartoes([...cartoes, novoCartao]);
  };

  const handleEdit = (cartao) => {
    setCartaoEditando(cartao);
    setFormulario({
      nome: cartao.nome,
      descricao: cartao.descricao,
      cor: cartao.cor
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja apagar este cartão?")) {
      setCartoes(prev => prev.filter(c => c.id !== id));
    }
  };

  const salvarEdicao = () => {
    setCartoes((prev) =>
      prev.map((c) =>
        c.id === cartaoEditando.id ? { ...c, ...formulario } : c
      )
    );
    setCartaoEditando(null); // fecha o modal
  };

  const totalCartoes = cartoes.length + 1;

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 5 + columnIndex;
    if (index >= totalCartoes) return null;

    if (index === cartoes.length) {
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
        <div className={styles.Card} style={{ backgroundColor: cartao.cor }}>
          <h4>{cartao.nome}</h4>
          <p>{cartao.descricao}</p>
          <div className={styles.Botoes}>
            <button onClick={() => handleEdit(cartao)}>✏️</button>
            <button onClick={() => handleDelete(cartao.id)}>🗑️</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Modal de Edição */}
      {cartaoEditando && (
        <div className={styles.Modal}>
          <div className={styles.ModalContent}>
            <h3>Editar Cartão</h3>
            <input
              type="text"
              value={formulario.nome}
              onChange={(e) => setFormulario({ ...formulario, nome: e.target.value })}
              placeholder="Nome do cartão"
            />
            <textarea
              rows={4}
              value={formulario.descricao}
              onChange={(e) => setFormulario({ ...formulario, descricao: e.target.value })}
              placeholder="Descrição"
            />
            <label>
              Cor:
              <input
                type="color"
                value={formulario.cor}
                onChange={(e) => setFormulario({ ...formulario, cor: e.target.value })}
              />
            </label>
            <div className={styles.Botoes}>
              <button onClick={salvarEdicao}>Salvar</button>
              <button onClick={() => setCartaoEditando(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Grade de Cartões */}
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
    </>
  );
}

export default Home;





