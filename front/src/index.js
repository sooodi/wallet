
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './app/store';
import { TransactionsProvider } from "./context/TransactionContext";
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <TransactionsProvider>
      <Provider store={store}>
        <App />
      </Provider>
      </TransactionsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

