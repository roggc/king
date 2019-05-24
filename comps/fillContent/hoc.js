import React,{useState} from 'react'

export default C=>({children,...rest})=>
{
  const [state,setState]=useState({})
  return <C {...rest}>{{...state,...children}}</C>
}
