import React, {useState} from 'react'

import ProductForm from './ProductForm'
import Search from './Search'
import ProductList from './ProductList'

const Products=()=> {
  const [products,setProducts]=useState([])
  const addProductHandler=(item)=>{

  fetch('https://my-json-server.typicode.com/typicode/demo/posts', {
    method:'POST',
    body:JSON.stringify(item),
    headers:{'Content-Type':'application/json;charset=UTF-8'}
  }).then((response)=> response.json().then((responseData)=>{
    setProducts((prevState)=>{
      return[
        ...prevState , {
          id: responseData.name,
          ...item
        }
      ]
          })
  })
  )



  }
  return (
    <div className="App">
      <ProductForm onAddProduct={addProductHandler}/>
      <section>
        <Search />
        <ProductList products={products} onRemoveItem={()=>{}} />
      </section>

    </div>
  )
}

export default Products
