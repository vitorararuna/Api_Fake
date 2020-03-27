import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';


import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

import * as CartActions from '../../store/modules/cart/actions';


export default function Cart() {

  const total = useSelector(state =>
    formatPrice(state.cart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)));


  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })))

  const dispatch = useDispatch();


  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

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
          {cart.map(product => (
            <tr> {/* Linha */}
              <td> {/* coluna */}
                <img
                  src={product.image}
                  alt={product.title}
                />
              </td>
              <td>{/* coluna */}
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>{/* coluna */}
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td> {/* coluna */}
                <strong>{product.subtotal}</strong>
              </td>
              <td>{/* coluna */}
                <button
                  type="button"
                  onClick={() => dispatch(CartActions.removeFromCart(product.id))}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </ProductTable>
      <footer>
        <button>Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}



// const mapStateToProps = state => ({ //Vai pegar informações do nosso estado e vai mapear em formato de propriedades pro nosso componente
//   cart: state.cart.map(product => ({
//     ...product,
//     subtotal: formatPrice(product.price * product.amount), //esse cálculo vai ser realizado novamente se alguma informação do noss reducer atualizar
//   })),

//   total: formatPrice(state.cart.reduce((total, product) => { //utilizamos o reduce quando queremos pegar um array (cart) e reduzir ele a um único valor (total)
//     return total + product.price * product.amount;
//   }, 0)), //total inicializa com 0
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CartActions, dispatch);


// export default connect(mapStateToProps, mapDispatchToProps)(Cart);

