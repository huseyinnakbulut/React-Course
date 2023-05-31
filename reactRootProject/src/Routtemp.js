import React, { Component } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

export default class Routtemp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="" element></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
