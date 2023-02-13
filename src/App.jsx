// import {useSelector, useDispatch} from 'react-redux'
// import { increment, decrement, setUserAction } from './actions'
// function App() {
//   const counter = useSelector((state)=>state.counter)
//   const user = useSelector((state)=>state.user)
//   const dispatch = useDispatch()

//   return (
//     <div className="App">
//       <h1>React Redux</h1>
//       <h1>Counter {counter}</h1>
//       <div>
//         <button onClick={()=>dispatch(increment())}>+</button>
//         <button onClick={()=>dispatch(decrement())}>-</button>

//       </div>
//       <h1>{user &&(
//         <p>{user.name}</p>
//       )}</h1>
//       {!user &&(
//         <button onClick={()=>dispatch(setUserAction({id:1,name:"Jeremy Munroe"}))}>Set User</button>
//       )}
//     </div>
//   )
// }

// export default App


import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
import UsersList from './features/users/UsersList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="userslist" element={<UsersList />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App;
