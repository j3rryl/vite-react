import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createStore} from 'redux'
import myReducers from './reducers'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// const store = createStore(myReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
    <Route path="/*" element={<App/>} />
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
