import { createStore } from 'redux';


//Obs.: Não posso criar um store sem nenhum reducer (informação que vamos armazenar), nesse caso o nosso carrinho de compras é o reducer:
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;