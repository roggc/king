import React,{useState,useRef} from 'react'

export default C=>({children,...rest})=>
{
  const [state,setState]=useState
  (
    {
      message:'hi'
    }
  )
  const btnClick=()=>setState
  (
    {
      ...state,
      message:myRef.current.value
    }
  )
  const myRef=useRef()
  const props=
  {
    btnClick,
    myRef
  }
  return <C {...rest} {...props}>{{...state,...children}}</C>
}
