import { createSlice } from "@reduxjs/toolkit";
import { categoriesApi } from "./categoriesApi";

const initialState = {
  products: [],
  totalPrice: 0,
};

const calculateTotal = (state) =>
  state.products.reduce((acc, el) => el.price * el.quantity + acc, 0);

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductToBasket: (state, action) => {
      state.products = state.products.find(({ id }) => id === action.payload.id) === undefined
      ? [...state.products, {...action.payload, quantity: 1}]
      : [...state.products.map((el) => ({...el, quantity: el.quantity + 1 }))];
      state.totalPrice = calculateTotal(state);
    },

    deletPropductFromBasket: (state, action) => {
      state.products = [
        ...state.products.filter((el) => el.id !== action.payload),
      ];
      state.totalPrice = calculateTotal(state);
    },
    addQuantityToProduct: (state, action) => {
      state.products = [
        ...state.products.map((el) => 
         el.id === action.payload 
          ? {...el, quantity: el.quantity + 1} 
          : el),
      ];
      state.totalPrice = calculateTotal(state);
    },
    deletQuantityToProduct: (state, action) => {
      state.products = [
        ...state.products.map((el) =>
          el.id !== action.payload || el.quantity === 1
              ? el
              : { ...el, quantity: el.quantity - 1 }
        ),
      ];
      state.totalPrice = calculateTotal(state);
    },

  },

});

export const {
  addProductToBasket,
  countTotalPrice,
  deletPropductFromBasket,
  addQuantityToProduct,
  deletQuantityToProduct,
} = basketSlice.actions;


