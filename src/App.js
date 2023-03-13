import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount() {
    //instead of using firebase .firestore(), we can use this.db
    this.db
      .collection('products')
      //firstly we used .get() .then() but it won't auto update when changes in firebase
      //so now we have to use .onSnapshot and its and eventlistener
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          return doc.data();
        });
          
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;
          return data;
          
        })

        this.setState({
          products,
          loading: false
        })

      });
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

    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.Qty;
    })
    return count;
  }

  getCartTotal = () => {

    const { products } = this.state;

    let cartTotal = 0;

    products.forEach((product) => {
      cartTotal = cartTotal + product.Qty * product.price;
    })

    return cartTotal;
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        name: 'shoes',
        price: 1500,
        Qty: 1,
        img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      })
      .then((docRef) => {
        console.log('The product has been added', docRef);
      })
      .catch((error) => {
        console.log('Error :', error)
      })
  }

  render() {
    const { products, loading } = this.state
    return (
      <div>
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{fontSize: 10, padding: 10}}>Add a product</button>
        <Cart
          products={products}
          onInscreaseQuantity={this.handleIncreaseQuantity}
          onDescreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading page...</h1>}
        <div style={{ fontSize: 20, padding: 10 }}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
