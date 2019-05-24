import hoc from 'comps/app/footer/hoc'
import React from 'react'
import style from 'comps/app/footer/style'

const v1=
({children,content,...rest})=>
<div className={style.background} {...rest}>
  {content}
</div>

export const V1=hoc(v1)
