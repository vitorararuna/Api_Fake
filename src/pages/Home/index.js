import React, { Component } from 'react';
import { connect } from 'react-redux'; //Conecta o nosso componente com o estado do redux
import { bindActionCreators } from 'redux';

import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';


class Home extends Component {

  state = {
    products: [],
  };


  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });

  }

  //Sempre que for fazer uma alteração no estado. precisamos disparar um action (objeto que contém o type e o restante do conteúdo que a gente quiser) -> onclick()
  handleAddProduct = product => {
    //todo componente que a gente conecta com o redux (Home no caso), recebe uma propriedade que se chama dispatch => dispara uma action ao redux
    //Obs.: quando a gente dispara o dispatch, todos os reducers são ativados
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {

    const { products } = this.state;


    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>

        ))}
      </ProductList >
    )
  }
}


//Antes tinhamos a mapStateToProps, onde ela converte pedaços do nosso estado (reducers da nossa app) em propriedades aqui dentro do nosso componente.
//Já o mapDispatchToProps, converte actions do redux em propriedades do nosso componente 
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
//Como o connect da home não tem o mapStateToProps ainda, ele tem só o mapDispatchToProps, o 1° elm eu passo null (que seria o mapStateToProps, que já vamos adicionar)
//e o segundo , eu passo o nosso mapDispatchToProps => agora posso acessar as ações do carrinho direto, tipo "addToCart(product);"
