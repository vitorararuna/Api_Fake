import React from 'react'
import { Router } from 'react-router-dom'
import Routes from './routes';
import { Provider } from 'react-redux' // o Provaider vai deixar disponível o nosso store da aplicação disponível para todos os componentes
import { ToastContainer } from 'react-toastify'

import './config/ReactotronConfig'

import GlobalStyles from './styles/global'
import Header from './components/Header'

import history from './services/history'
import store from './store'


function App() {
  return (

    <Provider store={store}>
      <Router history={history}> {/* o react-router-dom agora ouve as informações que vão acontecer em nosso services/history e fazer a navegação de tela*/}
        <Header />
        <Routes />

        <GlobalStyles />
        <ToastContainer autoClose={3000} />   {/* qtd de segundos que a mensagem vai ficar exibida em tela*/}
      </Router>
    </Provider>
  );
}

export default App;
