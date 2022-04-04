import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, WISH_ADD_ITEM, WISH_REMOVE_ITEM } from "../constants/cartconstant.js";


export const addToCart = (productId, qty,) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);

dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    
    },
  });
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}
export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };


  
export const addToWish = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);

dispatch({
  type: WISH_ADD_ITEM,
  payload: {
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    product: data._id,
    qty,
  },
});
localStorage.setItem('wishItems',JSON.stringify(getState().wish.wishItems));
}
export const removeFromWish = (productId) => (dispatch, getState) => {
  dispatch({ type:  WISH_REMOVE_ITEM, payload: productId });
  localStorage.setItem('wishItems', JSON.stringify(getState().wish.wishItems));
};
  export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
  };

  export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
  };