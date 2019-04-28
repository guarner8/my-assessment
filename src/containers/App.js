import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import './../components/resize.css'

import {styles} from './AppStyles.js'

const App = () => (
  <div className="container">
    <div style={styles.test} className="row logo-bar">
        <h2 className="col-md-8 col-xs-12 align-self-center logo" style={styles.companyLogo}>Acme Store</h2>
        <p className="col align-self-end text-md-right cart">
            <img src="/imgs/cart.png" alt="cart" id="cart"/>  Your cart is empty
        </p>
    </div>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
