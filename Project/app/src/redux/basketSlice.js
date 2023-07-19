import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductToBasket: (state, action) => {
      if (
        state.products.find(({ id }) => id === action.payload.id) === undefined
      ) {
        state.products = [...state.products, action.payload];
      } else {
        state.products = [
          ...state.products.map((el) => {
            return { ...el, quantity: el.quantity + 1 };
          }),
        ];
      }
    },

    countTotalPrice: (state) => {
      state.totalPrice = state.products.reduce((acc, el) => {
        return el.price * el.quantity + acc;
      }, 0);
    },
    deletPropductFromBasket: (state, action) => {
      state.products = [
        ...state.products.filter((el) => el.id !== action.payload),
      ];
    },
    addQuantityToProduct: (state, action) => {
      state.products = [
        ...state.products.map((el) => {
          if (el.id === action.payload) {
            return { ...el, quantity: el.quantity + 1 };
          } else {
            return el;
          }
        }),
      ];
    },
    deletQuantityToProduct: (state, action) => {
      state.products = [
        ...state.products.map((el) => {
          //el.id === action.payload ? { ...el, quantity: el.quantity - 1 } : el

          if (el.id === action.payload) {
            if (el.quantity === 1) {
              // return state.products = state.products.filter((el) => el.id !== action.payload);
              return el;
            }
            return { ...el, quantity: el.quantity - 1 };
          }
          return el;
        }),
      ];
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
export const basketReducer = basketSlice.reducer;
