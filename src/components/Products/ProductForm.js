import React , {useState} from 'react'

import Card from '../UI/Card'

import './ProductForm.css'

const ProductForm = React.memo((props) => {

const inputState = useState({title:'' ,amount:''})

  const submitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <section className="product-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={inputState[0].title} onChange={(event)=>inputState[1]({title:event.target.value})}  />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={inputState[0].amount} onChange={(event)=>inputState[1]({amount:event.target.value})}/>
          </div>
          <div className="product-form__actions">
            <button type="submit">Add</button>
          </div>
        </form>
      </Card>
    </section>
  )
})

export default ProductForm
