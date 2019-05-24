import hoc from 'comps/header/hoc'
import React from 'react'
import style from 'comps/header/style'
import {V1 as Modal} from 'comps/modal/index'
import {Link} from 'react-router-dom'

const v1=
({children,children:{showMenu},content,onClickMenu,innerRef,...rest})=>
<div className={`${style.background} ${style.container}`} {...rest}>
  <div>
    {content}
  </div>
  <div className={`${style.menu}`} onClick={onClickMenu} ref={innerRef}>
    <div>
      <i className="fas fa-bars"></i>
    </div>
    <Modal content=
      {
        <div>
          <div>
            <Link to="/">home</Link>
          </div>
          <div>
            <Link to="/about">about</Link>
          </div>
        </div>
      }
    style={{right: '75px'}}>{{...children,show:showMenu}}</Modal>
  </div>
</div>

export const V1=hoc(v1)
