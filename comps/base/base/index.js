import hoc from 'comps/base/base/hoc'
import React from 'react'
import style from 'comps/base/base/style'

const v1=
({children,...rest})=>
<div {...rest}>
  base
</div>

export const V1=hoc(v1)
