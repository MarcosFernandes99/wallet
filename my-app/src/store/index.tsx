import {combineReducers, createStore} from 'redux';
import MoneyReducer from './buttons/reducer';

const reducers = combineReducers({
  wallet: MoneyReducer
})

const store = createStore(reducers)

export default store