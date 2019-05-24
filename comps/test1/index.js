import hoc from 'comps/test1/hoc'
import React from 'react'
import {V1 as C1} from 'comps/test1/test2/index'
import style from 'comps/test1/style'

const v1=
({children:{greeting},onClick})=>
<div>
  {greeting}
  <button onClick={onClick}>change</button>
</div>

const v2=
({children,onClick})=>
<div className={`${style.border} ${style.fadein}`}>
  <button onClick={onClick}>hey</button>
  <C1>{{...children}}</C1>
</div>

export const V1=hoc(v1)
export const V2=hoc(v2)
