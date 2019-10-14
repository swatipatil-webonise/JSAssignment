import React from 'react';
import './App.css';

class ViewProducts extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello
       <table>
          <tbody>
            {this.props.products && this.props.products.map(product =>
              <tr>
                <td>{product.product}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>{product.productCount}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewProducts;
