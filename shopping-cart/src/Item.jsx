import React, {useContext} from 'react'
import { CartContext } from './context/Cart'

function Item(props) {

    const cart = useContext(CartContext)
    console.log(cart)

    function handleAdd(){
        cart.setItems([...cart.items, {name: props.name, price: props.price}])
    }

  return (
    <div className='item-card'>
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      <button onClick={handleAdd}>Add To Cart</button>
    </div>
  )
}

export default Item
