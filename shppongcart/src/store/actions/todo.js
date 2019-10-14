export const ADD_COUNT = 'ADD_COUNT';
export const SUBTRACT_COUNT = 'SUBTRACT_COUNT';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'; 

export const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  products,
});

export const addCount = (id) => ({
  type: ADD_COUNT,
  id,
});

export const subtractCount = (id) => ({
  type: SUBTRACT_COUNT,
  id,
});

export const getProducts = (products) => {
  return dispatch => {
    dispatch(loadProducts(products));
  }
};

export const increamentCount = (id) => {
  return dispatch => {
    dispatch(addCount(id));
  }
};

export const decreamentCount = (id) => {
  return dispatch => {
    dispatch(subtractCount(id));
  }
}

