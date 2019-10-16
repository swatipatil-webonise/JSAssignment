import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { clearAll } from './store/actions/actions';

class ViewProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  showMsg() {
    let total = 0;
    for (let i = 0; i < this.props.products.length; i++) {
      total = this.props.products[i].quantity * this.props.products[i].price;
      this.props.products[i].quantity = 0;
    }
    alert(`SuccessFully submmited the amount of $${total}, Thanks for visiting.`);
    this.props.clear();
  }

  render() {
    return (
      <div><center><br /><br />
        <table border="1"><thead>
          <tr><th>Product Detail</th><th>Product Quantity</th></tr></thead>
          <tbody>
            {this.props.products && this.props.products.map(product =>
              <tr>
                <td>{product.product}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>{product.quantity}</td>
              </tr>
            )}
          </tbody></table>
        <br /><br />
        <Link to="/"><button onClick={this.showMsg.bind(this)}>Pay Now</button></Link>
      </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.todos,
});

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProducts); 
