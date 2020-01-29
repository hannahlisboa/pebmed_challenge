import React from 'react';
import {Provider} from 'react-redux';
import Routes from '~/routes';
import CustomLoading from '~/components/CustomLoading';

import {PersistGate} from 'redux-persist/lib/integration/react';

// import the two exports from the last code snippet.
import {persistor, store} from './store/storeConfig';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<CustomLoading />} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
