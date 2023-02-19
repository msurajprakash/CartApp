import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {

    constructor(){
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
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].Qty += 1

        this.setState({
            products: products
        })

    }

    handleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].Qty === 0){
            return;
        }

        products[index].Qty -= 1

        this.setState({
            products: products
        })

    }

    handleDeleteProduct = (id) =>{
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id)

        this.setState({
            products: items
        })
    }
    render (render){

        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product) =>{
                    return <CartItem 
                        product={product} 
                        key={product.id}
                        onInscreaseQuantity={this.handleIncreaseQuantity}
                        onDescreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct={this.handleDeleteProduct}
                    />
                })}
            </div>
        )
    }
}

export default Cart;