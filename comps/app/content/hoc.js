import React from 'react'

export default C=>
class extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={}
    this.render=()=><C {...this.props}>{{...this.props.children,...this.state}}</C>
  }
}
