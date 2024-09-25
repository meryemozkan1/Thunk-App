import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes";

//*Sepetteki elemanları al
export const getCart = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CART_LOADING,
  });
  api
    .get("/cart")
    .then((res) =>
      dispatch({
        type: ActionTypes.CART_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: ActionTypes.CART_ERROR,
        payload: err.message,
      });
    });
};

//*Sepete yeni eleman ekleme
export const addToBasket = (product, rest) => (dispatch) => {
  // a)Sepete eklenecek ürünlerin bilgileri belirler
  const newItem = {
    id: v4(),
    productId: product.id, // "producId" düzeltildi
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: rest.name,
    amount: 1,
  };
  // b) Elemanı API'ya ekle
  api
    .post(`/cart`, newItem)
    //c) Başarılı olursa reducera haber ver
    .then(() =>
      dispatch({
        type: ActionTypes.ADD_TO_CART,
        payload: newItem,
      })
    );
};

//* Sepetteki ürünü güncelle(Miktar arttırma/azaltma)
export const updateItem = (id, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    .then((res) => {
      dispatch({
        type: ActionTypes.UPTADE_CART,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.CART_ERROR,
        payload: err.message,
      });
    });
};

export const deleteItem = (id) => (dispatch) => {
  api.delete(`/cart/${id}`).then(() =>
    dispatch({
      type: ActionTypes.DELETE_FROM_CART,
      payload: id,
    })
  );
};
