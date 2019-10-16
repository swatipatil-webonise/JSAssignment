import React from 'react';
import { Link } from 'react-router-dom'

class CheckoutProducts extends React.Component {

  constructor(props) {
    super(props);
  }

  checkCount = (event) => {
    if (!this.countProducts()) {
      event.preventDefault();
      alert('Product yet not selected');
    }
  }

  countProducts() {
    let count = 0;
    let products = this.props.products;
    for (let i = 0; i < products.length; i++) {
      count = count + products[i].quantity;
    }
    return count;
  }

  render() {
    return (
      <div><br />
        Product count : {this.countProducts()}<br /><br />
        <Link to='/view'><input type="button" value="Check Out" onClick={this.checkCount.bind(this)}></input></Link><br /><br />
        <br />
      </div>
    );
  }
}

export default CheckoutProducts;
