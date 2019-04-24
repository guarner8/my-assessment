import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

import {styles} from './AppStyles.js'

const App = () => (
  <div className="container">
    <div style={styles.test} className="row">
        <h2 className="col-md-9 col-xs-12 align-self-center" style={styles.companyLogo}>Acme Store</h2>
        <p className="col align-self-end text-md-right">Your cart is empty</p>
    </div>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
