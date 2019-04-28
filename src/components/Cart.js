import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import {overlay} from './cartOverlay.js'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div className="checkout-item">
        <img src={'/imgs/' + product.title + '.png'} className="checkout-img"/>
        <Product
          title={product.title}
          price={product.price}
          quantity={products.length}
          key={product.id}
        />
      </div>
    )
  ) : (
      <div className="container">
        <img className="row checkout-cart" src="/imgs/checkout-cart.png" alt="cart"/>
        <br/>
        <em className="row checkout-msg">Please add some products to your cart.</em>
      </div>
  )

  return (
      <div className="background-overlay">
        <div className="container cart-container">
            <img src="/imgs/close.png" alt="close" onClick={overlay.off}/>
            <h3>Your cart</h3>
            <hr className="cart-break"/>
            <div className="item">{nodes}</div>
            <hr className="cart-break checkout-brk" style={hasProducts ? {display: 'block'} : {display: 'none'}}/>
            <p className="total">{hasProducts ? 'Total: $' + total : ''}</p>
            <button onClick={onCheckoutClicked}
                className = "checkout"
                style={hasProducts ? {display: 'block'} : {display: 'none'} }
                disabled={hasProducts ? '' : 'disabled'}>
                Checkout
            </button>
        </div>
      </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
