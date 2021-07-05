import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import authReducer from './reducer/authReducer'
import cartReducer from './reducer/cartReducer';
import { productReducer } from './reducer/productReducer'
import userReducer from './reducer/userReducer';
let reducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
    user: userReducer
});
const middleWare = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch);
    } else {
        next(action);
    }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(middleWare)));
export default store;
