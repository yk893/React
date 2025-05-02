import React from 'react'
import Header from './components/header/Header'
import {products} from "./helper/data"
import Productcard from './components/productCard/Productcard'

const App = () => {
  return (
    <div>
      <Header/>
      <Productcard/>
    </div>
  )
}

export default App