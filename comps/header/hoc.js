import React,{useRef,useState} from 'react'
import {useClickOutside} from 'hooks/useClickOutside'

export default C=>({children,...rest})=>
{
  const [state,setState]=useState
  (
    {
      showMenu:false
    }
  )
  const innerRef = useRef(null)
  useClickOutside
  (
    (e) => onClickMenu(undefined,true),
    innerRef
  )
  const onClickMenu=(e,hide=false)=>
  {
    setState
    (
      {
        ...state,
        showMenu:!hide&&!state.showMenu
      }
    )
  }
  const props=
  {
    onClickMenu,
    innerRef
  }
  return <C {...rest} {...props}>{{...state,...children}}</C>
}
