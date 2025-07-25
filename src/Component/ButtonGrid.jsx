import React from 'react'
import {ButtonGrid1, Button} from "./ButtonGrid.style"

const ButtonGrid = ({ValueHandler, clearHandler, backHandler, equalHandler}) => {
  return (
    <>
<ButtonGrid1>
  <Button className='button' onClick={() => clearHandler()}>AC</Button>
  <Button className='button'onClick={() => backHandler()}>DEL</Button>
  <Button className='operator' onClick={() => ValueHandler("/")}>/</Button>
  <Button className='operator' onClick={() => ValueHandler("*")}>*</Button>

  <Button onClick={() => ValueHandler("7")}>7</Button>
  <Button onClick={() => ValueHandler("8")}>8</Button>
  <Button onClick={() => ValueHandler("9")}>9</Button>
  <Button className='operator' onClick={() => ValueHandler("-")}>-</Button>

  <Button onClick={() => ValueHandler("4")}>4</Button>
  <Button onClick={() => ValueHandler("5")}>5</Button>
  <Button onClick={() => ValueHandler("6")}>6</Button>
  <Button className='operator sum' onClick={() => ValueHandler("+")}>+</Button>

  <Button onClick={() => ValueHandler("1")}>1</Button>
  <Button onClick={() => ValueHandler("2")}>2</Button>
  <Button onClick={() => ValueHandler("3")}>3</Button>
  <Button className='zero' onClick={() => ValueHandler("0")}>0</Button>

  <Button onClick={() => ValueHandler(".")}>.</Button>
  <Button className='equal' onClick={() => equalHandler()}>=</Button>
</ButtonGrid1>

    </>
  )
}

export default ButtonGrid