import {createStore} from 'redux'

import rootreducers from './reducer/reducer';

const store =createStore(rootreducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;