import hoc from 'comps/fillContent/hoc'
import React from 'react'
import style from 'comps/fillContent/style'

const v1=
({children,content,...rest})=>
<div {...rest} className={`${style.fadein}`}>
  {
    content||
    <span>undefined</span>
  }
</div>

export const V1=hoc(v1)
