import { call, put, all, takeLatest } from 'redux-saga/effects'; // call -> ajudar no await | put -> disparar uma action | all -> | takeLatest
import api from '../../../services/api';

import { addToCartSuccess } from './actions';


//Essa function contém esse asterísco, isso é o "generator", é como se estivesse assim: "async function" e o await seria o "yield"
function* addToCart({ id }) { //essa função vai ter a responsabilidade por acessar minha api, buscar as inf detalhadas desse produto e cadastrar dentro do carrinho
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart), //se o usuário clicar muito rápido no botão de adc,sem tempo de esperar o async, ele só vai considerar a última
]);