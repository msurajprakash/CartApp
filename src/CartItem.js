import React from "react";

class CartItem extends React.Component {

    render () {
        const {name, price, Qty} = this.props.product;
        const {product, onInscreaseQuantity, onDescreaseQuantity} = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt=''/>
                </div>
                <div className="right-block">
                    {/* inline css */}
                    <div style={{fontSize: 25}}>{name}</div>
                    <div style={{color: '#777'}}>Rs. {price}</div>
                    <div style={{color: '#777'}}>Qty: {Qty}</div>
                    {/* buttons */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://img.icons8.com/ios-glyphs/256/plus-2-math.png"
                        onClick={() => onInscreaseQuantity(product)}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://img.icons8.com/material-rounded/256/minus-sign.png"
                        onClick={() => onDescreaseQuantity(product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://img.icons8.com/ios-filled/256/delete.png"
                    />
                </div>
            </div>
        )
    }
}

//object css or internal css
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'grey'
    }
}

export default CartItem;