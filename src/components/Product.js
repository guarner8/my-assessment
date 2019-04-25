import React from 'react'
import PropTypes from 'prop-types'

// Import styles objects
import {styles} from './ProductItemStyle.js'

const Product = ({ price, inventory, title }) => (
  <div style={styles.itemInfo}>
        <div style={styles.firstProductLine}>
            <span style={styles.productName}>{title}</span> 
            <span style={styles.itemCost}>&#36;{price}</span>
        </div>
        <p style={styles.itemQuant}>{inventory ? `${inventory} REMAINING` : null}</p>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
