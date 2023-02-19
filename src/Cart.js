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
                    Qty: 1,
                    img: ''
                },
                {
                    name: 'Watch',
                    price: 2000,
                    Qty: 1,
                    img: ''
                },
                {
                    name: 'Laptop',
                    price: 50000,
                    Qty: 1,
                    img: ''
                }
                ]
    
        }
        // this.testing();
    }
    render (){

        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product) =>{
                    return <CartItem product={product} />
                })}
            </div>
        )
    }
}

export default Cart;