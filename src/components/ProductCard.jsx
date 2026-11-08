import React from 'react'
import styles from '../styles/ProductCard.module.css'

// Props:
//   product     - the product object to display
//   onAddToCart - function from App that adds a product to the cart
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* The arrow function makes sure onAddToCart runs on click, not during
          render. The button is not disabled for out-of-stock items, because
          the sample Milk item is out of stock and still needs to be addable. */}
      <button
        data-testid={'product-' + product.id}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard