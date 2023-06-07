// import React, { Component } from 'react'
// import { Container } from 'reactstrap'
// import CartDetail from '../navi/CartDetail'
// import Detail from '../cart/Detail'

// import Navbar from '../navi/Navbar'
// import Header from '../navi/Header'

// import Dashboard from './Dashboard'
// import { Route, Routes } from 'react-router-dom'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Navbar /> */}
//         <Header />
//         <Container>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/cart" element={<Detail />} />
//             <Route path="*" element={<h1>Not Found</h1>} />
//           </Routes>
//         </Container>
//       </div>
//     )
//   }
// }

import React from 'react'
import { Container } from 'reactstrap'
import Header from '../navi/Header'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'
import CartDetail from '../cart/Detail'
import Order from '../cart/Order'

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<CartDetail />} />

        <Route path="/order" element={<Order />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Container>
  )
}

export default App
