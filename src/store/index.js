import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';


//Obs.: Não posso criar um store sem nenhum reducer (informação que vamos armazenar), nesse caso o nosso carrinho de compras é o reducer:
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = process.env.NODE_ENV === 'development'
  ? console.tron.createSagaMonitor()
  : null;
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const enhancer = process.env.NODE_ENV === 'development' //integrando o reactotron ao redux
  ? compose(
    console.tron.createEnhancer(),
    applyMiddleware(sagaMiddleware)
  )
  : applyMiddleware(sagaMiddleware);



const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;