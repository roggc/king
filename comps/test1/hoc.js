import React from 'react'

export default C=>
class extends React.Component
{
  constructor(props)
  {
    super(props)
    this.onClick=()=>this.setState
    (
      {
        ...this.state,
        greeting:'bye'
      }
    )
    this.props2=
    {
      onClick:this.onClick
    }
    this.state=
    {
      greeting:'hello'
    }
    this.render=()=><C {...this.props2} {...this.props}>{{...this.props.children,...this.state}}</C>
  }
}
