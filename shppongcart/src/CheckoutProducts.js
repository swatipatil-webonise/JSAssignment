import React from 'react';
import ViewProducts from './ViewProducts';

class CheckoutProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div><br />
        Product count : {this.props.productCount}<br /><br />
        <button onClick={this._onButtonClick}>Check Out</button><br /><br />
        {this.state.showComponent ?
          <ViewProducts products={this.props.products} /> :
          null
        }<br />
      </div>
    );
  }
}

export default CheckoutProducts;
