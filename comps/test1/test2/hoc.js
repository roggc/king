import React from 'react'

export default C=>
class extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state=
    {
      greeting2:'arrivererchi'
    }
    this.props2={}
    this.render=()=><C {...this.props} {...this.props2}>{{...this.props.children,...this.state}}</C>
  }
}
