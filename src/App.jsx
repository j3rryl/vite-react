import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, setUserAction } from './actions'
function App() {
  const counter = useSelector((state)=>state.counter)
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>React Redux</h1>
      <h1>Counter {counter}</h1>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>

      </div>
      <h1>{user &&(
        <p>{user.name}</p>
      )}</h1>
      {!user &&(
        <button onClick={()=>dispatch(setUserAction({id:1,name:"Jeremy Munroe"}))}>Set User</button>
      )}
    </div>
  )
}

export default App
