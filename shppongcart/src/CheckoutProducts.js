import React from 'react';
import { Link } from 'react-router-dom'

class CheckoutProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '/view',
    }
  }

  checkProductCount() {
    if (this.props.totalProductCount === 0) {
      alert('Products not selected.');
      this.setState({
        url: '/',
      })
      return false;
    }
  }

  render() {
    return (
      <div><br />
        Product count : {this.props.totalProductCount}<br /><br />
        <Link to={this.state.url}><input type="button" onClick={this.checkProductCount.bind(this)} value="Check Out"></input></Link><br /><br />
        <br />
      </div>
    );
  }
}

export default CheckoutProducts;
