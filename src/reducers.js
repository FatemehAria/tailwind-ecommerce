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

const initial = [];
export const cartItems = (state = initial, { type, payload }) => {
  const product = payload;

  switch (type) {
    case "addItem":
      const existingItem = state.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.qty < product.rating.count) {
          return state.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          );
        } else {
          return state;
        }
      } else {
        return [...state, { ...product, qty: 1 }];
      }

    case "removeItem":
      const itemToRemove = state.find((item) => item.id === product.id);
      if (itemToRemove && itemToRemove.qty === 1) {
        return state.filter((item) => item.id !== product.id);
      } else {
        return state.map((item) =>
          item.id === product.id && item.qty
            ? { ...item, qty: item.qty - 1 }
            : item
        );
      }

    case "clearItem":
      return state.filter((item) => item.id !== product.id);

    case "emptyCart":
      return initial;

    default:
      return state;
  }
};
