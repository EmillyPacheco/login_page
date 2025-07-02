import styles from './../pages/home_page/home.module.scss';

export default function EditModal({ formulario, setFormulario, onSave, onCancel }) {
  return (
    <div className={styles.Modal}>
      <div className={styles.ModalContent}>
        <h3>Editar Cartão</h3>
        <label>
          Nome do cartão
          <input type="text" value={formulario.nome} onChange={e => setFormulario({ ...formulario, nome: e.target.value })} />
        </label>
        <label>
          Descrição
          <textarea value={formulario.descricao} onChange={e => setFormulario({ ...formulario, descricao: e.target.value })} rows={4} />
        </label>
        <label>
          Cor do Cartão
          <input type="color" value={formulario.cor} onChange={e => setFormulario({ ...formulario, cor: e.target.value })} />
        </label>
        <label>
          Imagem (URL)
          <input type="text" value={formulario.imagem} onChange={e => setFormulario({ ...formulario, imagem: e.target.value })} />
        </label>
        <div className={styles.Botoes}>
          <button onClick={onSave}>Salvar</button>
          <button onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
