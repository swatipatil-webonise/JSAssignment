import React from 'react';

export const ListProducts = ({
  products,
  onAdd,
  onAddCount,
  onSubtractCount,
}) => {
  return (
    <div><center><table>
      <tbody>
        {products && products.map(product =>
          <tr key={product.id}>
            <td>{product.id + 1}</td>
            <td>{product.product}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td><button onClick={onSubtractCount.bind(null, product.id)}>  -  </button></td>
            <td><button onClick={onAddCount.bind(null, product.id)}>  +  </button></td>
            <td><button onClick={onAdd.bind(null, product.id)}>  Add  </button></td>
          </tr>
        )}
      </tbody>
    </table></center>
    </div>
  );
};
