import React from 'react'

// cartItems: array of product objects from App's cart state
const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {/* One <li> per item, in the required format: 'Milk is in your cart.' */}
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart