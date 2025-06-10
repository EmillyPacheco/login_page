// src/components/CartaoListaVirtual.jsx
import { FixedSizeGrid } from "react-window";
import styles from './home.module.scss';

function Home({ alturaCartao = 120 }) {


  const cartoes = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    nome: `Cartão ${i + 1}`,
  }));

    const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 5 + columnIndex;
    if (index >= cartoes.length) return null;
    const cartao = cartoes[index];



    return (
      <div style={{ ...style, padding: "10px", boxSizing: "border-box" }}>
        <div className={styles.Card}>
          <h4>{cartao.nome}</h4>
          {/* <p>ID: {cartao.id}</p> */}
        </div>
      </div>
    );
  };



  return <>
     <FixedSizeGrid
      columnCount={5}
      columnWidth={250}
      rowCount={ Math.ceil(cartoes.length / 5)}
      rowHeight={300}
      height={1000}
      width={5 * 250}
      className={styles.Grind}
    >
      {Cell}
    </FixedSizeGrid>
  </>

}

export default Home;



