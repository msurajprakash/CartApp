import React from "react";

class CartItem extends React.Component {

    constructor(){
        super();
        this.state = {
            name: 'Phone',
            price: 999,
            Qty: 1,
            img: ''
        }
        // this.testing();
    }

    //increase call using AJAX
    // testing() {
    //     const promise = new Promise((resolve, reject) =>{
    //         setTimeout(() =>{
    //             resolve('done');
    //         }, 5000)
    //     })

    //     promise.then(() =>{
    //         //setState acts like synchronus call
    //         this.setState({Qty: this.state.Qty + 10})
    //         console.log('state', this.state)
    //     })
    // }

    increaseQuantity = () => {
        // console.log('this', this.state);
        //setState form 1 --- it will not run again & again if called twice or thrice
        // this.setState({
        //     Qty: this.state.Qty + 1
        // })

        //form 2  --- it will run again & again if called twice or thrice
        this.setState((prevState) =>{
            return {
                Qty: prevState.Qty + 1
            }
        }, () =>{
            console.log(this.state);
        })
    }

    deleteQuantity = () => {
        // console.log('this', this.state);

        const {Qty} = this.state;
        if(Qty === 0){
            return;
        }
        this.setState((prevState) =>{
            return{
                Qty: prevState.Qty - 1
            }
        }, () =>{
            console.log(this.state);
        })
    }

    render () {
        const {name, price, Qty} = this.state;
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
                        onClick={this.increaseQuantity}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://img.icons8.com/material-rounded/256/minus-sign.png"
                        onClick={this.deleteQuantity}
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