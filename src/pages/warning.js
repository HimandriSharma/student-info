import { Card } from 'antd'
import React from 'react'

const Warning = () => {
  return (
    <Card>
      <h1>This route either does not exist <br/>or you need to login first.<br/></h1>
      <h2>Jump to: <a href="/">Login Page</a></h2>
    </Card>
  )
}

export default Warning