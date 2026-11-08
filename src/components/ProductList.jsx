import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

// Props from App:
//   selectedCategory - 'all', 'Fruits' or 'Dairy'
//   onAddToCart      - function to call with a product when its button is clicked
const ProductList = ({ selectedCategory, onAddToCart }) => {
  // Derived data, so no extra state is needed. It is recalculated on every
  // render: show everything for 'all', otherwise only matching categories.
  const visibleProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === selectedCategory)

  return (
    <div>
      <h2>Available Products</h2>

      {/* Render only the filtered products. The unique key helps React track items. */}
      {visibleProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  )
}

export default ProductList