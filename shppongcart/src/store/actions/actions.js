export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_COUNT = 'ADD_COUNT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const SUBTRACT_COUNT = 'SUBTRACT_COUNT';
export const CLEAR_ALL = 'CLEAR_ALL';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const addCount = (id) => ({
  type: ADD_COUNT,
  id,
});

export const subtractCount = (id) => ({
  type: SUBTRACT_COUNT,
  id,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});

export const clearAll = () => ({
  type: CLEAR_ALL,
});

export const onAddProduct = (product) => {
  return dispatch => {
    dispatch(addProduct(product));
  }
};

export const incCount = (id) => {
  return dispatch => {
    dispatch(addCount(id));
  }
};

export const decCount = (id) => {
  return dispatch => {
    dispatch(subtractCount(id));
  }
};

export const onRemoveProduct = (id) => {
  return dispatch => {
    dispatch(removeProduct(id));
  }
};

export const clear = () => {
  return dispatch => {
    dispatch(clearAll());
  }
}
