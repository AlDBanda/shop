import React from 'react'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
  const{products, inStockOnly, filterText } = props;

  const rows =[];
  let lastCategory = null;

  products.forEach((product) =>{
    if (product.name.indexOf(filterText) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory){
      rows.push(
        <ProductCategoryRow  
        category={product.category}
        key={product.category}
        />
      )
    }
    rows.push(
      <ProductRow
      product={product}
      key={product.name}
      />
    )
    lastCategory = product.category;
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
        </tbody>
    </table>
  )
}
