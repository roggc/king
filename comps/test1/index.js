import hoc from 'comps/test1/hoc'
import React from 'react'
import style from 'comps/test1/style'

const v1=
({children:{message},content,btnClick,myRef,...rest})=>
<div {...rest}>
  {message}
  <button onClick={btnClick}>change</button>
  <input ref={myRef}/>
  {content}
</div>

export const V1=hoc(v1)
