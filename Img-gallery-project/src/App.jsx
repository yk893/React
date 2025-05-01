import React from 'react'
import Card from './Card';
import "./App.css"
import card from './helper/data';


const App = () => {


  return (
    <div>
    <h1>Image Gallery</h1>
    <Card  kart={card[0]}/>
    <Card  kart={card[1]}/>
    <Card  kart={card[2]}/>
    <Card  kart={card[3]}/>
    <Card  kart={card[4]}/>
    <Card  kart={card[5]}/>
    <Card  kart={card[6]}/>
    <Card  kart={card[7]}/>
    <Card  kart={card[8]}/>
    <Card  kart={card[9]}/>
    <Card  kart={card[10]}/>
   

    </div>
  )
}

export default App