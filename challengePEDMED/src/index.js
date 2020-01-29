import React from 'react';
import {Provider} from 'react-redux';
import store from './store/storeConfig';

import Routes from '~/routes';

const storeConfig = store();

const App = () => (
  <Provider store={storeConfig}>
    <Routes />
  </Provider>
);

export default App;
