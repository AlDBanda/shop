import React, { useState } from 'react'

export default function SearchBar(props) {
  const {inStockOnly, filterText } = props;

const handleFilterTextChange = (e) => {
  props.onFilterTextChange(e.target.value)
}
const handleInStockChange = (e) => {
  props.onInStockChange(e.target.checked)
}

  return (
  <form>
    <input 
    type="text" 
    placeholder="Search..." 
    value={filterText}
    onChange={handleFilterTextChange}
    />
    <p>
      <input 
      type="checkbox" 
      checked={inStockOnly}
      onChange={handleInStockChange} 
      />
      {' '}
      Only show products in stock
    </p>
  </form>
  )
}
