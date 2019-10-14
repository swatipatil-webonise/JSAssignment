import React from 'react';

export const ListProducts = ({
  products,
  onAdd,
  onSubtract
}) => {
  return (
    <div>
      <table border="1"><thead><tr><th>Id</th><th>Product Name</th><th>Product Count</th><th>Product Price</th><th>Add</th><th>Subtract</th></tr></thead>
        <tbody>
          {products && products.map(product =>
            <tr key={product.id}>
              <td>{product.id + 1}</td>
              <td>{product.product}</td>
              <td>{product.productCount}</td>
              <td>{product.price}</td>
              <td><button onClick={onSubtract.bind(null, product.id)}>  -  </button></td>
              <td><button onClick={onAdd.bind(null, product.id)}>  +  </button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
