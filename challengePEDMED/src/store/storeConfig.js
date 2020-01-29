import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import indicationsReduce from './reduces/indications';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const reducers = combineReducers({
  indications: indicationsReduce,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(pReducer, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);
