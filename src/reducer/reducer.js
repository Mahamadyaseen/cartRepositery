import { combineReducers } from "redux";
import  {addProduct} from './index';
import cartReducer from "./index";
const rootreducers=combineReducers(
    {
      // addProduct,
       //cartItems,
       cartReducer
    });

export default rootreducers;
