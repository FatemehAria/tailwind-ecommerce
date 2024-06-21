import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "proLoad",
      payload: { proLoading: true, proData: [], proError: "" },
    });

    const { data } = await axios("https://fakestoreapi.com/products/");

    dispatch({
      type: "proData",
      payload: { proLoading: false, proData: [...data], proError: "" },
    });
  } catch (error) {
    dispatch({
      type: "proError",
      payload: {
        proLoading: false,
        proData: [],
        proError: `Poor network connection detected. Please check your connectivity.`,
      },
    });
  }
};

export const addCart = (product) => {
  return {
    type: "addItem",
    payload: product,
  };
};
export const removeCart = (product) => {
  return {
    type: "removeItem",
    payload: product,
  };
};
export const clearCartItem = (product) => {
  return {
    type: "clearItem",
    payload: product,
  };
};
export const emptyCart = () => {
  return {
    type: "emptyCart",
  };
};
