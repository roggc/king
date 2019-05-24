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
  const menuRef = useRef(null)
  useClickOutside
  (
    (e) => menuClick(undefined,true),
    menuRef
  )
  const menuClick=(e,hide=false)=>
  {
    setState
    (
      {
        ...state,
        showMenu:!hide&&!state.showMenu
      }
    )
  }
  const modalClick=(e)=>e.stopPropagation()
  const props=
  {
    menuClick,
    menuRef,
    modalClick
  }
  return <C {...rest} {...props}>{{...state,...children}}</C>
}
