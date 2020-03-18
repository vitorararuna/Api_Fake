import { createStore } from 'redux';


//Obs.: Não posso criar um store sem nenhum reducer (informação que vamos armazenar), nesse caso o nosso carrinho de compras é o reducer:
import rootReducer from './modules/rootReducer';


const enhancer = process.env.NODE_ENV === 'development' //integrando o reactotron ao redux
  ? console.tron.createEnhancer()
  : null;

  

const store = createStore(rootReducer, enhancer);

export default store;