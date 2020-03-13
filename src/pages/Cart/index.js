import React from 'react'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>

        <tbody>
          <tr> {/* Linha */}

            <td> {/* coluna */}
              <img
                src="https://static.netshoes.com.br/produtos/camisa-flamengo-i-2021-sn-torcedor-adidas-masculina/02/NQQ-1178-002/NQQ-1178-002_zoom2.jpg?ts=1582761876&ims=326x"
                alt="tênis"
              />
            </td>
            <td>{/* coluna */}
              <strong>Peita do mengo né pae</strong>
              <span>R$129,90</span>
            </td>
            <td>{/* coluna */}
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td> {/* coluna */}
              <strong>R$258,80</strong>
            </td>
            <td>{/* coluna */}
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>

          </tr> {/* Linha */}
        </tbody>

      </ProductTable>
      <footer>
        <button>Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
