import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import './resize.css'

// Import styles objects
import {styles} from './ProductItemStyle.js'

// Image path
const imgPath = "/imgs"

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="d-flex flex-wrap product-container" style={{ marginBottom: 20, backgroundColor:"white"}}>
    <div className="col-5 col-xs-12 imgStyle" style={styles.imgStyle}>
        <picture>
            <source srcSet={imgPath + "/" + product.title + "xs.png"} media="(max-width:768px)" />
            <source srcSet={imgPath + "/" + product.title + "Small.png"} media="(max-width:1199px)" />

            <img style={styles.imgStyle} alt={product.title} src={imgPath + "/" + product.title + ".png"} />
        </picture>
    </div>

    <div className="col product-info">
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory} />
        <div className="add-to-cart">
            <button
                style={styles.buttons}
                className="resize-button"
                onClick={onAddToCartClicked}
                disabled={product.inventory > 0 ? '' : 'disabled'}>
                {product.inventory > 0 ? 'ADD TO CART' : 'Sold Out'}
            </button>
        </div>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
