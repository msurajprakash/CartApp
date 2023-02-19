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
                    img: '',
                    id: 1
                },
                {
                    name: 'Watch',
                    price: 2000,
                    Qty: 1,
                    img: '',
                    id: 2
                },
                {
                    name: 'Laptop',
                    price: 50000,
                    Qty: 1,
                    img: '',
                    id: 3
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
                    return <CartItem 
                        product={product} 
                        key={products.id}
                    />
                })}
            </div>
        )
    }
}

export default Cart;