import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import './../components/resize.css'

import {styles} from './AppStyles.js'
import {overlay} from '../components/cartOverlay.js'

const App = () => (
  <div className="container">
    <div style={styles.test} className="row logo-bar">
        <h2 className="col-md-8 col-xs-12 align-self-center logo" style={styles.companyLogo}>Acme Store</h2>
        <p className="col align-self-end text-md-right cart">
            <div className="cartContain" onClick={overlay.on}><img src="/imgs/cart.png" alt="cart" id="cart"/> {CartContainer.products ? CartContainer.products: 'Your cart is empty'}</div>
        </p>
        <p>{CartContainer}</p>
    </div>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
