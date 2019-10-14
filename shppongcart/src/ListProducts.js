import React from 'react';

export const ListProducts = ({
  products,
  onAdd,
  onSubtract
}) => {
  return (
    <div>
      <table>
        <tbody>
          {products && products.map(product =>
            <tr>
              <td>{product.product}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td><button onClick={onAdd.bind(null, product.id)}>  +  </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td><button onClick={onSubtract.bind(null, product.id)}>  -  </button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
