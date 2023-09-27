import { createContext, useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";
import cartItems from "./data";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import { getTotals } from "./utils";
const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const  {totalAmout , totalCost } = getTotals(state.cart) ;

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE , payload: { id } });
  };
  const decrease  = (id) => {
    dispatch({ type: DECREASE , payload: { id } });
  };
  return (
    <AppContext.Provider value={{ ...state, clearCart, remove ,increase ,decrease  ,totalAmout ,totalCost}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGobalContext = () => {
  return useContext(AppContext);
};
