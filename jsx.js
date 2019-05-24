import React from 'react'
import {V1 as C1,V2 as C2} from 'comps/test1/index'
import {Route,Link} from 'react-router-dom'

export default
(
  ()=>
  <div>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">C1</Link>
          </li>
          <li>
            <Link to="/C2">C2</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Route path='/' exact component={C1}/>
    <Route path='/C2' component={C2}/>
  </div>
)()
