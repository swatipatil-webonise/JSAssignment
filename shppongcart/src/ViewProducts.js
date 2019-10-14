import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

class ViewProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem('products')),
    }
    this.checkAll();
  }

  checkAll() {
    let proArray = this.state.products;
    for (let i = 0; i < proArray.length; i++) {
      if (proArray[i].productCount > 0) {
        continue;
      }
      else {
        proArray = proArray.splice(i, 1);
        console.log(i)
        i--;
      }
    }
    this.setState({
      products: proArray,
    })
  }

  showMsg() {
    alert('SuccessFully submmited amount');
    localStorage.clear();
  }

  render() {
    return (
      <div><center><br /><br />
        <table border="1"><thead>
          <tr><th>Product Detail</th><th>Product Quantity</th></tr></thead>
          <tbody>
            {this.state.products && this.state.products.map(product =>
              <tr>
                <td>{product.product}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>{product.productCount}</td>
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

export default ViewProducts;
