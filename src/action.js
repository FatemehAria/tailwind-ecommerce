import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "proLoad",
      payload: { proLoading: true, proData: [], proError: "" },
    });

    const { data } = await axios("https://fakestoreapi.com/products/");
    // console.log(data);

    dispatch({
      type: "proData",
      payload: { proLoading: false, proData: [...data], proError: "" },
    });
  } catch (error) {
    console.log(error.response.message);
    dispatch({
      type: "proError",
      payload: {
        proLoading: false,
        proData: [],
        proError: `${error.response.message}`,
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

// export const addCart = (itemId) => {
//   return {
//     type: "addToCart",
//     payload: {
//       itemId: itemId,
//     },
//   };
// };
// export const removeCart = (itemId) => {
//   return {
//     type: "removeFromCart",
//     payload: {
//       itemId: itemId,
//     },
//   };
// };
