import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // true = dark theme, false = light theme
  const [darkMode, setDarkMode] = useState(false)

  // Array of product objects the user has added to the cart
  const [cart, setCart] = useState([])

  // Selected category; 'all' matches the first <option> value below
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Flip dark mode on/off. The "prev" form is the safe way to toggle a boolean.
  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  // Called by a ProductCard when its "Add to Cart" button is clicked
  const handleAddToCart = (product) => {
    // Skip duplicates (checked by id) so each item appears only once
    if (!cart.some((item) => item.id === product.id)) {
      // Never mutate state directly; build a new array with the new item
      setCart([...cart, product])
    }
  }

  return (
    // The class name and inline styles both change with darkMode,
    // so the whole app switches colors without needing a CSS file
    <div
      className={darkMode ? 'App dark' : 'App light'}
      style={{
        minHeight: '100vh',
        padding: '1rem 2rem',
        backgroundColor: darkMode ? '#121212' : '#ffffff',
        color: darkMode ? '#f5f5f5' : '#111111'
      }}
    >
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Toggle gets the current mode (for its text) and the click handler */}
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

      {/* htmlFor + id link the label to the dropdown */}
      <label htmlFor="category-filter">Filter by Category: </label>

      {/* Controlled dropdown: value comes from state, onChange updates it */}
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* ProductList filters by category and reports add-to-cart clicks upward */}
      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      {/* Cart only displays what is in the cart state */}
      <Cart cartItems={cart} />
    </div>
  )
}

export default App