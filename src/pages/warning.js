import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Warning = () => {
  return (
    <Card>
      <h1>This route either does not exist <br/>or you need to login first.<br/></h1>
      <h2>Jump to: <Link to="/">Login Page</Link></h2>
    </Card>
  )
}

export default Warning