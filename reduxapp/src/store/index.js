import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers'

//Reducer is connected with store
let store = createStore(reducer, applyMiddleware())


export default store;