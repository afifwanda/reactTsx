import React from 'react';
import '../Style.css';

interface Props { 
  color: string 
  brightness: string
}

function BoxColor(props:Props){
  let color = '#'+props.color
  let filter = `brightness(${props.brightness})`
  return(
    <div style={{backgroundColor:color,filter:filter}} className='box'></div>
  )
}

export default BoxColor