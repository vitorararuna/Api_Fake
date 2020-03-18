import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import { Provider } from 'react-redux' // o Provaider vai deixar disponível o nosso store da aplicação disponível para todos os componentes
// import { ToastContainer } from 'react-toastify'

import './config/ReactotronConfig'

import GlobalStyles from './styles/global'
// import Routes from './routes'
import Header from './components/Header'

// import history from './services/history'
import store from './store'


function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />

        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
