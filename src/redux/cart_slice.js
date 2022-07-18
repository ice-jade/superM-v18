import { createSlice } from "@reduxjs/toolkit";

  let cart = [];
  try {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
  } catch (error) {
    cart = [];
  }


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart,
  },
  reducers: {
    addProduct: (state, action) => {     
      const oldProduct = state.cart.find(product => product.id === action.payload.id)
      if (oldProduct) {
        oldProduct.quantity += 1;
      } else {
        state.cart.push({...action.payload, quantity: 1})
      }
    },

    removeProduct: (state, action) => {
      const index = state.cart.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.cart.splice(index, 1); // toolkit引入了immer，支持mutable写法
      }
    },
  }
});

const cartCountSelector = (state) => {  // TODO: return the total number of items in the cart
  return state.cart.reduce( (total, product) =>  total += product.quantity, 0 );
};

const cartValueSelector = (state) => {
  return state.cart.reduce( (total, current) => total += current.quantity * current.price, 0 );
};

const cartReducer = cartSlice.reducer;
const { addProduct, removeProduct } = cartSlice.actions;

export { cartReducer, addProduct, removeProduct, cartCountSelector, cartValueSelector };