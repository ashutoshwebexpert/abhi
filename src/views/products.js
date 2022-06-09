import React from 'react';
import data from "../data/data";
import {useParams} from 'react-router-dom';
function Products() {
    const {category} =useParams();
    const findDataCategory=data.products[category];
    
  return(
      <div>
  <ul>
    {findDataCategory.map((product) => (
      <li key={product.id}>
        <div>{product.brand}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
      </li>
    ))}
  </ul>
  </div>
  )
}
export default Products;
