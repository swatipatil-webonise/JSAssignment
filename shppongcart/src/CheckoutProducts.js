import React from 'react';
import { Link } from 'react-router-dom'

class CheckoutProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  render() {
    return (
      <div><br />
        Product count : {this.props.productCount}<br /><br />
        <Link to="/view"><button >Check Out</button></Link><br /><br />
        <br />
      </div>
    );
  }
}

export default CheckoutProducts;
