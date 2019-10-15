import React from 'react';
import CheckoutProducts from './CheckoutProducts';
import { ListProducts } from './ListProducts';
import { connect } from 'react-redux';
import { addProduct, addCount, subtractCount, removeProduct } from './store/actions/actions';

export const products = [{
  id: 0,
  product: 'LANCER Blue Running Shoes',
  quantity: 0,
  price: 400,
}, {
  id: 1,
  product: 'BATA Blue Running Shoes',
  quantity: 0,
  price: 600,
}, {
  id: 2,
  product: 'RELAXO Blue Running Shoes',
  quantity: 0,
  price: 1000,
}]

class ShopApp extends React.Component {
  constructor(props) {
    super(props);
  }

  onAddCount = (id) => {
    let flag = 0;
    for (let i = 0; i < this.props.products.length; i++) {
      if (this.props.products[i].id === id) {
        flag = 1;
      }
    }
    if (flag === 1) {
      this.props.incCount(id);
    } else {
      this.props.onAddProduct(products[id]);
      this.props.incCount(id);
    }
  }

  onSubtractCount = (id) => {
    let flag = 0;
    for (let i = 0; i < this.props.products.length; i++) {
      if (this.props.products[i].id === id && this.props.products[i].quantity > 0) {
        flag = 1;
      }
      if (this.props.products[i].quantity === 1) {
        this.props.decCount(id);
        this.props.onRemoveProduct(id);
        return;
      }
    }
    if (flag === 1) {
      this.props.decCount(id);
    } else {
      alert('Please add the product first.');
    }
  }

  onAdd = (id) => {
    for (let i = 0; i < this.props.products.length; i++) {
      if (this.props.products[i].id === id) {
        alert('Product already added plz add quantity.');
        return;
      }
    }
    this.props.onAddProduct(products[id]);
  }

  render() {
    return (
      <div>
        <center>
          <CheckoutProducts products={this.props.products} /><br /><br />
          <ListProducts products={products} onAddCount={this.onAddCount} onSubtractCount={this.onSubtractCount} onAdd={this.onAdd} />
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onAddProduct: (product) => dispatch(addProduct(product)),
  onRemoveProduct: (id) => dispatch(removeProduct(id)),
  incCount: (id) => dispatch(addCount(id)),
  decCount: (id) => dispatch(subtractCount(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopApp); 
