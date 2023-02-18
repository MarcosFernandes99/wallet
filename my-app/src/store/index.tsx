import {combineReducers, createStore} from 'redux';
import MoneyReducer from './buttons/reducer';
import {ToggleTheme} from "./buttons/reducer"

const reducers = combineReducers({
  wallet: MoneyReducer,
  theme: ToggleTheme,
})

const store = createStore(reducers)

export default store