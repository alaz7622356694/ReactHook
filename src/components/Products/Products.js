import React, {useState , useEffect, useCallback} from 'react'

import ProductForm from './ProductForm'
import Search from './Search'
import ProductList from './ProductList'

const Products=()=> {
  const [products,setProducts]=useState([])
  useEffect(  ()=>{

    fetch('https://jsonplaceholder.typicode.com/posts').then
   ((response)=> {return response.json()}).then((responseData)=>{
const loadedProducts=[]
for(const item in responseData){
  loadedProducts.push({
    id:item,
    title:responseData[item].title,
    amount:responseData[item].amount,
  })
}

setProducts(loadedProducts)

   })

   } , [] )



const searchProductHandler=useCallback((items)=>{
  setProducts(items)},[])



  const addProductHandler=(item)=>{

  fetch('https://jsonplaceholder.typicode.com/posts', {
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
        <Search onLoadProducts={searchProductHandler} />
        <ProductList products={products} onRemoveItem={()=>{}} />
      </section>

    </div>
  )
}

export default Products
