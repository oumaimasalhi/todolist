import React, { useState } from 'react'
import Input from './input'
import CustomButton from './button'
import {useDispatch,useSelector} from 'react-redux'
import todoReducer from '../redux/reducer'
import { ADD } from '../redux/action'
const Mainpage = () => {
  const dispatch = useDispatch()
  const todolist = useSelector(state=> state.todo)
  const [getText,setGetText] = useState('')
  const saveTodoList = () =>{
    //alert(getText)
    dispatch(ADD({id:todolist.length+1,name:getText,isDone:false}))
  }
  return (
    <div> 
        <div className='d-flex justify-content-center align-items-start m-3'>  
        <Input onChange={setGetText} />
        <CustomButton variant='outline-primary' name='save' saveTodoList={saveTodoList} />
        </div>
        <div className='d-flex flex-column'>
        {todolist?.map(el => 
          <div className='d-flex justify-content-center'>
            <li>{el.name}</li>
            <CustomButton variant='outline-success'  name={<i class="fas fa-check"></i>} />
            <CustomButton variant='outline-danger' name={<i class="far fa-times-circle"></i>}/>
          </div>
        )}
        </div>
    </div>
  )
}

export default Mainpage