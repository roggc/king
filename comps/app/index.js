import hoc from 'comps/app/hoc'
import React from 'react'
import style from 'comps/app/style'
import {V1 as Header} from 'comps/header/index'
import {V1 as Content} from 'comps/app/content/index'
import {V1 as Footer} from 'comps/footer/index'

const v1=
({children,...rest})=>
<div className={`${style.generics}`} {...rest}>
  <Header content=
    {
      'Wellcome'
    }
  />
  <Content content=
    {
      'content'
    }
  />
  <Footer content=
    {
      'footer'
    }
  />
</div>

export const V1=hoc(v1)
