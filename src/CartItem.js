import React from "react";

class CartItem extends React.Component {
    render () {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt=''/>
                </div>
                <div className="right-block">
                    {/* inline css */}
                    <div style={{fontSize: 25}}>Phone</div>
                    <div style={{color: '#777'}}>Rs. 999</div>
                    <div style={{color: '#777'}}>Qty: 1</div>
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