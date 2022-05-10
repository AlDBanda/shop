import React,{ useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function FilterableProductTable(props) {
 const { products } = props;

  const [filterText, setFilterText] = useState('')
  const handleFilterTextChange = (value) => {
    setFilterText(value)
  }

 const[inStockOnly, setInStockOnly] = useState(false)
 const handleInStockChange = (value) => {
   setInStockOnly(value)
 }

  return (
    <div>
    
      <SearchBar 
      filterText={filterText}
      onFilterTextChange={handleFilterTextChange}
      inStockOnly={inStockOnly} 
      onInStockChange={handleInStockChange}
      />
      <ProductTable
      inStockOnly={inStockOnly} 
      products={products} 
      filterText={filterText}
      />
    </div>
  )
}
