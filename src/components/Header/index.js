import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';
import { MdShoppingBasket } from 'react-icons/md';

export default function Header() {

  const cartSize = useSelector(state => state.cart.length)

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  )
}


//O connect pode receber parâmetros, e o primeiro que ele vai receber aqui é uma função, que recebe um state (state inteiro do redux). E eu preciso
//retornar desse estado, as informações que quero acessar dentro desse meu componente Header

    // export default connect(state => ({
    //   // cart: state.cart,    //state.cart = nome do reducer que quero acessar
    //   cartSize: state.cart.length,
    // }))(Header);

//Ou seja, estou acessando um state que foi alterado nom componente Home em meu componente Header