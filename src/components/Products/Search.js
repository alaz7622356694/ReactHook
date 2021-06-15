import React from 'react'
import Card from '../UI/Card'
import {useState , useEffect} from 'react'
import './Search.css'

const Search = React.memo((props) => {

const {onLoadProducts}=props

  const [searchItem,setSearchItem]=useState('')

  useEffect(()=>{

    const query= searchItem.length===0? '' :
    `?orderBy="title"&equalTo="${searchItem}"`


    fetch('https://jsonplaceholder.typicode.com/posts' + query).then
    ((response)=> {return response.json()}).then((responseData)=>{
 const loadedProducts=[]
 for(const item in responseData){
   loadedProducts.push({
     id:item,
     title:responseData[item].title,
     amount:responseData[item].amount,
   })
 }
 
onLoadProducts(loadedProducts)
    })
  } , [searchItem,onLoadProducts])



  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Search</label>
          <input type="text" 
          value={searchItem} 
          onChange={(event)=>setSearchItem(event.target.value)} />
        </div>
      </Card>
    </section>
  )
})

export default Search
