import React from 'react'
import './Botão.css'

const Botão = (props) => {
  return (
    <button className='botao'>{props.children}</button>
  )
}

export default Botão