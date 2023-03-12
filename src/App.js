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
          Qty: 1,
          img: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
          id: 1
        },
        {
          name: 'Watch',
          price: 2000,
          Qty: 1,
          img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          id: 2
        },
        {
          name: 'Laptop',
          price: 50000,
          Qty: 1,
          img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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

  getCartTotal = () => {

    const {products} = this.state;

    let cartTotal = 0;

    products.forEach((product) => {
      cartTotal = cartTotal + product.Qty * product.price;
    })

    return cartTotal;
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
        <div style={{fontSize: 20, padding: 10}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
