import React from 'react'

// Props from App:
//   darkMode - boolean, decides which text the button shows
//   onToggle - function that flips the darkMode state in App
const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button onClick={onToggle}>
      {/* Offer the opposite of the current mode */}
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle