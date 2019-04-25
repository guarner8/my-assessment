import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

// Import styles objects
import {styles} from './ProductItemStyle.js'

// Image path
const imgPath = "/imgs"

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="d-flex flex-wrap" style={{ marginBottom: 20 }}>
    <div className="flex-column" style={styles.imgStyle}>
        <picture>
            <source srcSet={imgPath + "/" + product.title + "Small.png"} media="(max-width:992px)" />
            <img style={styles.imgStyle} src={imgPath + "/" + product.title + ".png"} />
        </picture>
    </div>

    <div className="flex-column flex-grow-1" style={styles.productInfo}>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory} />
        <div className="add-to-cart">
            <button
                style={styles.buttons}
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
