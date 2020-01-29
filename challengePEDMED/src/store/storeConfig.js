import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import indicationsReduce from './reduces/indications';

const reducers = combineReducers({
  indications: indicationsReduce,
});

const storeConfig = () =>
  createStore(reducers, compose(applyMiddleware(thunk)));

export default storeConfig;
