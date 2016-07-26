import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

// import '!style!css!../css/base.css'
// import '!style!css!../css/app.css'

render(
  <Root />,
  document.querySelector("#todoapp")
);