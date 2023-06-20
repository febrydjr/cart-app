// const cart = [];

// export const addToCart = (item) => {
//   cart.push(item);
// };

// export default cart;

const cart = [];

export const addToCart = (item) => {
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    const newItem = { ...item, quantity: 1 };
    cart.push(newItem);
  }
};

export default cart;
