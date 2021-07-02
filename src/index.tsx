import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposite',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-06-25 16:23:44'),
        },
        {
          id: 2,
          title: 'Hamburgão',
          type: 'withdraw',
          category: 'Comida',
          amount: 58,
          createdAt: new Date('2021-07-01 17:26:31'), 
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
