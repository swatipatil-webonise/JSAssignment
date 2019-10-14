const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return action.products;

    case 'ADD_COUNT':
      return state.map((product) => {
        if (product.id === action.id) {
          product.productCount++;
        }
        return product;
      })

    case 'SUBTRACT_COUNT':
      return state.map((product) => {
        if (product.id === action.id) {
          if (product.productCount === 0) {
            alert('Product not added yet.');
            return;
          }
          product.productCount--;
        }
        return product;
      })

    default:
      return state;
  }
};

export default todoReducer;
