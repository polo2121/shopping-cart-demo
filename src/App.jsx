// React
import { useState } from 'react'

// Global css
import './App.css'
import './animate.css'

// Data
import foods from "./data/foods.json"

// Component
import ProductShopping from '@features/product-shopping'

function App() {
  console.log(foods)
  return (
    <FoodieShopping>
      <ProductShopping />
    </FoodieShopping>
  )
}

function FoodieShopping({ children }) {
  return (
    <section>
      {children}
    </section>
  )
}

export default App 
