import hoc from 'comps/test1/test2/hoc'
import React from 'react'

const v1=
({children:{greeting}})=>
<div>{greeting}</div>

export const V1=hoc(v1)
