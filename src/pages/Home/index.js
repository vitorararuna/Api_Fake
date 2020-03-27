import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'; //Conecta o nosso componente com o estado do redux
import { bindActionCreators } from 'redux';

import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';


function Home({ amount, addToCartRequest }) {

  const [products, setProducts] = useState([]);


  useEffect(() => {

    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();

  }, []);



  //Sempre que for fazer uma alteração no estado. precisamos disparar um action (objeto que contém o type e o restante do conteúdo que a gente quiser) -> onclick()
  function handleAddProduct(id) {
    //todo componente que a gente conecta com o redux (Home no caso), recebe uma propriedade que se chama dispatch => dispara uma action ao redux
    //Obs.: quando a gente dispara o dispatch, todos os reducers são ativados
    addToCartRequest(id);
  };

  /* OBS.: Não utilizamos o useCallback nessa function acima, pois ela não depende de outra informação, apenas do ID que recebe */


  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button
            type="button"
            onClick={() => handleAddProduct(product.id)}
          >
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>

      ))}
    </ProductList >
  )
}


//Antes tinhamos a mapStateToProps, onde ela converte pedaços do nosso estado (reducers da nossa app) em propriedades aqui dentro do nosso componente.
//Já o mapDispatchToProps, converte actions do redux em propriedades do nosso componente 
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);


const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}), //estou criando um objeto, cuja cada uma das chaves do objeto é o id do produto e seu valor o amount
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//Como o connect da home não tem o mapStateToProps ainda, ele tem só o mapDispatchToProps, o 1° elm eu passo null (que seria o mapStateToProps, que já vamos adicionar)
//e o segundo , eu passo o nosso mapDispatchToProps => agora posso acessar as ações do carrinho direto, tipo "addToCart(product);"
