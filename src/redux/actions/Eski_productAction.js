// 1) Senkron Olanlar
export const Loading = () => ({
  type: "SET_LOADING",
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const setProducts = (payload) => ({
  type: "SET_PRODUCTS",
  payload,
});

export const getProducts = () => {
  //getDaata fonsiyonu asenkron bir fonksiyon return etmeli
  return (dispatch) => {
    dispatch(setLoading());

    api
      .get("/product")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
};
