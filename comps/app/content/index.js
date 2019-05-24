import hoc from 'comps/app/content/hoc'
import React from 'react'
import style from 'comps/app/content/style'

const v1=
({children,content,...rest})=>
<div className={style.background} {...rest}>
  {content}
</div>

export const V1=hoc(v1)
