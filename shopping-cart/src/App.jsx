import Item from "./Item"
import Cart from "./Cart"

function App() {

  return(<>
  
      <div className="items">
        <Item name = 'MacBook Pro' price = {50000}/>
        <Item name = 'Pendrive' price = {6000}/>
        <Item name = 'Smart Phone' price = {20000}/>
        <Item name = 'Charging Cord' price = {12000}/>
      </div>

    <Cart/>

  </>)

}

export default App
