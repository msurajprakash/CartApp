import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          name: 'Phone',
          price: 12000,
          Qty: 0,
          img: '',
          id: 1
        },
        {
          name: 'Watch',
          price: 2000,
          Qty: 0,
          img: '',
          id: 2
        },
        {
          name: 'Laptop',
          price: 50000,
          Qty: 0,
          img: '',
          id: 3
        }
      ]

    }
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].Qty += 1

    this.setState({
      products: products
    })

  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].Qty === 0) {
      return;
    }

    products[index].Qty -= 1

    this.setState({
      products: products
    })

  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id)

    this.setState({
      products: items
    })
  }

  getCartCount = () => {

    const {products} = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.Qty;
    })
    return count;
  }

  render() {
    const {products} = this.state
    return (
      <div>
        <Navbar count={this.getCartCount()}/>
        <Cart
        products={products} 
        onInscreaseQuantity={this.handleIncreaseQuantity}
        onDescreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
