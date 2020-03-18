import { call, select, put, all, takeLatest } from 'redux-saga/effects'; // call -> ajudar no await | put -> disparar uma action | all -> | takeLatest -> | select -> busca informações dentro do estado
import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';
import { toast } from 'react-toastify';

import { addToCartSuccess, updateAmountSuccess } from './actions';


//Essa function contém esse asterísco, isso é o "generator", é como se estivesse assim: "async function" e o await seria o "yield"
function* addToCart({ id }) { //essa função vai ter a responsabilidade por acessar minha api, buscar as inf detalhadas desse produto e cadastrar dentro do carrinho

  const productExists = yield select(
    state => state.cart.find(p => p.id === id),
  )

  //verificando stock
  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade Solicitada Fora De Estoque')
    return; // p o resto da função não execute
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));

  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    }

    yield put(addToCartSuccess(data));
    
    history.push('/cart');
  }


}

function* updateAmount({ id, amount }) {

  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if(amount > stockAmount){
    toast.error('Quantidade Solicitada Fora De Estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart), //se o usuário clicar muito rápido no botão de adc,sem tempo de esperar o async, ele só vai considerar a última
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]); 