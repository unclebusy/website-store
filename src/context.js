import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
}

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  const closeAlert = (item) => {
    dispatch({type: 'CLOSE_ALERT'})
  }

  const addToBasket = (item) => {
    dispatch({type: 'ADD_TO_BASKET', payload: item})
  }

  const removeFromBasket = (itemId) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
  }

  const incrementQuantity = (itemId) => {
    dispatch({type: 'INCREMENT_QUANTITY', payload: {id: itemId}})
  }

  const decrementQuantity = (itemId) => {
    dispatch({type: 'DECREMENT_QUANTITY', payload: {id: itemId}})
  }

  const handleBasketShow = () => {
    dispatch({type: 'TOGGLE_BASKET'})
  }

  const setGoods = (data) => {
    dispatch({type: 'SET_GOODS', payload: data})
  }

  return (
      <ShopContext.Provider value={{...value, closeAlert, addToBasket, removeFromBasket, incrementQuantity, decrementQuantity, handleBasketShow, setGoods}}>
        {children}
      </ShopContext.Provider>
  )
}
