import React from 'react';
import CheckoutProducts from './CheckoutProducts';
import { ListProducts } from './ListProducts';
import { connect } from 'react-redux';
import { increamentCount, decreamentCount ,getProducts} from './store/actions/todo';

class ShopApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [{
        id : 1,
        product: 'LANCER Blue Running Shoes',
        productCount: 0,
      },{
        id : 2,
        product: 'BATA Blue Running Shoes',
        productCount: 0,
      },{
        id : 3,
        product: 'RELAXO Blue Running Shoes',
        productCount: 0,
      }],
      totalProductCount: 0,
    };
  }

  onAdd = (id) => {
    this.props.addCount(id);
    this.setState({
      totalProductCount : this.state.totalProductCount + 1,
    });
  }

  onSubtract = (id) => {
    this.props.subtractCount(id);
    this.setState({
      totalProductCount : this.state.totalProductCount - 1,
    });
  }

  componentDidMount() {
    this.props.getProducts(this.state.products);
  }

  render() {
    return (
      <div>
        <center>
          <CheckoutProducts products={this.state.products} totalProductCount={this.state.totalProductCount}/><br /><br />
          <ListProducts products={this.state.products} onAdd={this.onAdd} onSubtract={this.onSubtract}/>
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
