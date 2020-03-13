import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
// import { Provider } from 'react-redux'
// import { ToastContainer } from 'react-toastify'

// import './config/Reactotron'

import GlobalStyles from './styles/global'
// import Routes from './routes'
import Header from './components/Header'

// import history from './services/history'
// import Store from './store'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
