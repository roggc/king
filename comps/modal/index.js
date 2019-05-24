import hoc from 'comps/modal/hoc'
import React from 'react'
import style from 'comps/modal/style'

const v1=
({children,content,...rest})=>
<div className={`${style.modal}`} {...rest}>
  {content}
</div>

export const V1=hoc(v1)
