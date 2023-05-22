export const products = (
  state = { proLoading: false, proData: [], proError: "" },
  { type, payload }
) => {
  switch (type) {
    case "proLoad":
      return payload;
    case "proData":
      return payload;
    case "proError":
      return payload;
    default:
      return state;
  }
};

const initial = []
export const cartItems = (state = initial, { type, payload }) => {
  const product = payload;
  switch (type) {
    case "addItem":
      if (state.find((item) => item.id === product.id)) {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + (item.qty < item.rating.count ? 1 : 0) } : item
        );
      } else {
        const product = payload;
        return [...state, { ...product, qty: 1 }];
      }

    case "removeItem":
      const exist = state.find((item) => item.id === product.id);
      if (exist.qty === 1) {
        return state.filter((item) => item.id !== exist.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    case "clearCart":
      return initial;
    default:
      return state;
  }
};
// item.rating.count


// const item = state.products.find(item => item.id === payload.id)
// const inCart = state.find((item) =>
//   item.id === payload.id ? true : false
// );
// return {
//   ...state,
//   state: inCart
//     ? state.map((item) =>
//         item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
//       )
//     : [...state, { ...item, qty: 1 }],
// };

// const exist = state.find((item) => item.id === payload.id);
// if (exist.qty === 1) {
//   return state.filter((item) => item.id !== exist.id);
// } else {
//   return state.map((item) =>
//     item.id === payload.id ? { ...item, qty: item.qty - 1 } : item
//   );
// }
