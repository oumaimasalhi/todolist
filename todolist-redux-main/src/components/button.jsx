import React from 'react'
import { Button } from 'react-bootstrap'
const button = ({name,variant,saveTodoList}) => {
  return (
    <Button variant={variant} className='ms-3 mb-3' onClick={()=>saveTodoList()}>{name}</Button>

   
  )
}

export default button