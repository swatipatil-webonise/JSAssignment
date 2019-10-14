import React from 'react';
import CheckoutProducts from './CheckoutProducts';
import { ListProducts } from './ListProducts';
import { connect } from 'react-redux';
import { increamentCount, decreamentCount, getProducts } from './store/actions/todo';

class ShopApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [{
        id: 0,
        product: 'LANCER Blue Running Shoes',
        productCount: 0,
        price: 400,
      }, {
        id: 1,
        product: 'BATA Blue Running Shoes',
        productCount: 0,
        price: 600,
      }, {
        id: 2,
        product: 'RELAXO Blue Running Shoes',
        productCount: 0,
        price: 1000,
      }],
      totalProductCount: 0,
      op: 0,
    };
  }

  onAdd = (id) => {
    this.props.addCount(id);
    this.setState({
      totalProductCount: this.state.totalProductCount + 1,
      op: 1,
    });
    this.write(id);
  }

  onSubtract = (id) => {
    this.props.subtractCount(id);
    this.setState({
      totalProductCount: this.state.totalProductCount - 1,
      op: -1,
    });
    this.write(id);
  }

  componentDidMount() {
    this.props.getProducts(this.state.products);
    this.setState({
      products: JSON.parse(localStorage.getItem('products')),
    })
    this.write(0);
  }

  write = (id) => {
    if (id === 0) {
      localStorage.setItem('products', JSON.stringify(this.state.products));
    } else {
      let things = JSON.parse(localStorage.getItem('products'));
      if (this.state.op === 1) {
        things[id - 1].productCount++;
        localStorage.setItem('products', JSON.stringify(this.state.products));
      } else {
        things[id - 1].productCount--;
        localStorage.setItem('products', JSON.stringify(this.state.products));
      }
    }
  }

  render() {
    return (
      <div>
        <center>
          <CheckoutProducts products={this.state.products} totalProductCount={this.state.totalProductCount} /><br /><br />
          <ListProducts products={this.state.products} onAdd={this.onAdd} onSubtract={this.onSubtract} />
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = {
  getProducts,
  addCount: increamentCount,
  subtractCount: decreamentCount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopApp); 
