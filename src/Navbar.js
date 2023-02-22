import React from "react";

const Navbar = (props) => {
        
        return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon}src="https://img.icons8.com/ios-glyphs/256/shopping-cart.png" alt=""/>
                    <span style={styles.cartCount}> {props.count}</span>
                </div>
            </div>
        )
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 30
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '2px 8px',
        position: 'absolute',
        right: 7,
        top: -9
    }
    
  }

export default Navbar;