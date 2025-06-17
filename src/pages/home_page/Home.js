import { useState } from "react";
import { FixedSizeGrid } from "react-window";
import styles from './home.module.scss';
import { FaEdit, FaTrash } from "react-icons/fa";


function Home({ alturaCartao = 120 }) {
  const [cartoes, setCartoes] = useState(
    Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      nome: `Cartão ${i + 1}`,
      descricao: "",
      cor: "#ffffff",
      imagem: ""
    }))
  );

  const [cartaoEditando, setCartaoEditando] = useState(null);
  const [cartaoParaExcluir, setCartaoParaExcluir] = useState(null);
  const [formulario, setFormulario] = useState({
    nome: "",
    descricao: "",
    cor: "#ffffff",
    imagem: ""
  });

  const handleAdd = () => {
    const novoId = cartoes.length + 1;
    const novoCartao = {
      id: novoId,
      nome: `Cartão ${novoId}`,
      descricao: "",
      cor: "#ffffff",
      imagem: ""
    };
    setCartoes([...cartoes, novoCartao]);
  };

  const handleEdit = (cartao) => {
    setCartaoEditando(cartao);
    setFormulario({
      nome: cartao.nome,
      descricao: cartao.descricao,
      cor: cartao.cor,
      imagem: cartao.imagem
    });
  };

  const handleDelete = (id) => {
    const cartao = cartoes.find(c => c.id === id);
    setCartaoParaExcluir(cartao); // abre o modal com o cartão escolhido
  };

  const confirmarExclusao = () => {
    setCartoes(prev => prev.filter(c => c.id !== cartaoParaExcluir.id));
    setCartaoParaExcluir(null); // fecha o modal
  };

  const cancelarExclusao = () => {
    setCartaoParaExcluir(null);
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
            <button className={`${styles.IconButton} ${styles.PencilButton}`} onClick={() => handleEdit(cartao)} title="Editar">
              <FaEdit size={20} />
            </button>
            <button className={`${styles.IconButton} ${styles.BinButton}`} onClick={() => handleDelete(cartao.id)} title="Excluir">
              <FaTrash size={20} />
            </button>
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

            <label>
              Nome do cartão
              <input
                type="text"
                value={formulario.nome}
                onChange={(e) =>
                  setFormulario({ ...formulario, nome: e.target.value })
                }
                placeholder="Ex: Tarefa de Front-End"
              />
            </label>

            <label>
              Descrição
              <textarea
                value={formulario.descricao}
                onChange={(e) =>
                  setFormulario({ ...formulario, descricao: e.target.value })
                }
                placeholder="Descreva o conteúdo do cartão"
                rows={4}
              />
            </label>

            <label>
              Cor do Cartão
              <input
                type="color"
                value={formulario.cor}
                onChange={(e) =>
                  setFormulario({ ...formulario, cor: e.target.value })
                }
              />
            </label>

            <label>
              Imagem (URL)
              <input
                type="text"
                value={formulario.imagem}
                onChange={(e) =>
                  setFormulario({ ...formulario, imagem: e.target.value })
                }
                placeholder="https://exemplo.com/imagem.jpg"
              />
            </label>

            <div className={styles.Botoes}>
              <button className="BotaoTexto Salvar" onClick={salvarEdicao}>Salvar</button>
              <button className="BotaoTexto Cancelar" onClick={() => setCartaoEditando(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {cartaoParaExcluir && (
        <div className={styles.Modal}>
          <div className={styles.ModalContent}>
            <h3>Confirmar Exclusão</h3>
            <p>Você realmente deseja apagar o cartão <strong>{cartaoParaExcluir.nome}</strong>?</p>
            <div className={styles.Botoes}>
              <button onClick={confirmarExclusao}>Sim</button>
              <button onClick={cancelarExclusao}>Cancelar</button>
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





