import { createSlice } from "@reduxjs/toolkit";
import { categoriesApi } from "./categoriesApi";
import { useEffect } from "react";
/*
const defaultState = {
  products: [],
  totalPrice: 0,
  totalFullPrice: 0,
  userSaving: 0,
};
*/

const write = (keyLS, arg) => {
  localStorage.setItem(keyLS, JSON.stringify(arg));
};

const read = (arg, defaultData = '') => {
  const data = localStorage.getItem(arg);
  const parsedData = data ? JSON.parse(data) : defaultData;
  return parsedData;
};

const calculateTotal = (state) =>
  state.products
    .reduce(
      (acc, el) =>
        (el.discont_price ? el.discont_price : el.price) * el.quantity + acc,
      0
    )
    .toFixed(2);

const calculateFullTotal = (state) =>
  state.products
    .reduce((acc, el) => el.price * el.quantity + acc, 0)
    .toFixed(2);

const calculateAllTotals = (state) => {
  const totalPrice = calculateTotal(state);
  const totalFullPrice = calculateFullTotal(state);
  return {
    totalPrice,
    totalFullPrice,
    userSaving: (totalFullPrice - totalPrice).toFixed(2),
  };
};

const productsFromStorage = read('products', [])

const initialState = {
  products: productsFromStorage,
  ...calculateAllTotals({products: productsFromStorage})
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductToBasket: (state, action) => {
      state.products =
        state.products.find(({ id }) => id === action.payload.id) === undefined
          ? [...state.products, { ...action.payload, quantity: 1 }]
          : [
              ...state.products.map((el) => ({
                ...el,
                quantity: el.quantity + 1,
              })),
            ];
      Object.assign(state, calculateAllTotals(state))
      write("products", state.products);
    },

    deletPropductFromBasket: (state, action) => {
      state.products = [
        ...state.products.filter((el) => el.id !== action.payload),
      ];
      Object.assign(state, calculateAllTotals(state))
      write("products", state.products);
    },
    addQuantityToProduct: (state, action) => {
      state.products = [
        ...state.products.map((el) =>
          el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el
        ),
      ];
      Object.assign(state, calculateAllTotals(state))
      write("products", state.products);
    },
    deletQuantityToProduct: (state, action) => {
      state.products = [
        ...state.products.map((el) =>
          el.id !== action.payload || el.quantity === 1
            ? el
            : { ...el, quantity: el.quantity - 1 }
        ),
      ];
      Object.assign(state, calculateAllTotals(state))
      write("products", state.products);
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
