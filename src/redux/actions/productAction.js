//! Thunk Aksyonu
import api from "../../utils/api";
import ActionTypes from "../actionTypes";

export const getProducts = (restId) => (dispatch) => {
  //reducera yüklemenın başladığı bildiriyoruz
  dispatch({
    type: ActionTypes.PRODUCT_LOADING,
  });

  api
    .get(`/products?restaurantId=${restId}`)
    //İstek başarılı olursa reducera veriler gönderilir.
    .then((res) =>
      dispatch({
        type: ActionTypes.PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    //istek başarısız olursa reducera hata mesajı gönder
    .catch((err) =>
      dispatch({
        type: ActionTypes.PRODUCT_ERROR,
        payload: err.message,
      })
    );
};
