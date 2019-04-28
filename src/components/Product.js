import React from 'react'
import PropTypes from 'prop-types'

// Import styles objects
import {styles} from './ProductItemStyle.js'

const Product = ({ price, inventory, title }) => (
  <div style={styles.itemInfo} className="item-info">
        <div style={styles.firstProductLine} className="fp-line">
            <span className="product-name" style={styles.productName}>{title}</span> 
            <span className="product-cost" style={styles.itemCost}>&#36;{price}</span>
        </div>
        <p className="item-quant" style={styles.itemQuant}>{inventory ? `${inventory} REMAINING` : null}</p>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
