import React from 'react'
import Card from '../UI/Card'
import {useState , useEffect ,useRef } from 'react'
import './Search.css'



const Search = React.memo((props) => {

const {onLoadProducts}=props

  const [searchItem,setSearchItem]=useState('')
  const inputRef=useRef()

  useEffect(()=>{

    setTimeout(()=>{

      if(searchItem === inputRef.current.value){
        
      const query= searchItem.length===0? '' :
      `?equalTo="${searchItem}"`
  
  
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
   
  onLoadProducts(loadedProducts.slice(1,4))
      })
      }


    } , 500)

  } , [searchItem,onLoadProducts , inputRef])



  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Search</label>
          <input type="text" 
          ref={inputRef}
          value={searchItem} 
          onChange={(event)=>setSearchItem(event.target.value)} />
        </div>
      </Card>
    </section>
  )
})

export default Search
