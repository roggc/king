import hoc from 'comps/app/header/hoc'
import React from 'react'
import style from 'comps/app/header/style'
import {V1 as Modal} from 'comps/modal/index'

const v1=
({children,content,...rest})=>
<div className={`${style.background} ${style.container}`} {...rest}>
  <div>
    {content}
  </div>
  <div className={`${style.menu}`}>
    <div>
      <i className="fas fa-bars"></i>
    </div>
    <div className={`${style.containerModal}`}>
      <Modal content=
        {
          <div>modal</div>
        }
      style={{right: '75px'}}></Modal>
    </div>
  </div>
</div>

export const V1=hoc(v1)
