import hoc from 'comps/app/hoc'
import React from 'react'
import style from 'comps/app/style'
import {V1 as Header} from 'comps/header/index'
import {V1 as Content} from 'comps/content/index'
import {V1 as Footer} from 'comps/footer/index'
import {V1 as FillContent} from 'comps/fillContent/index'
import {Route} from 'react-router-dom'

const v1=
({children,...rest})=>
<div className={`${style.generics}`} {...rest}>
  <Header content=
    {
      <span>Wellcome</span>
    }
  />
  <Content content=
    {
      <div>
        <Route path='/' exact render=
        {
          ()=><FillContent content=
          {
            <span>hello ...</span>
          }
          />
        }/>
        <Route path='/about' render=
        {
          ()=><FillContent content=
          {
            <span>bye ...</span>
          }
          />
        }/>
      </div>
    }
  />
  <Footer content=
    {
      <span>&copy; 2019 react development</span>
    }
  />
</div>

export const V1=hoc(v1)
