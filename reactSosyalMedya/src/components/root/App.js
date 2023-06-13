import React from 'react'
import { Container } from 'reactstrap'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../common/NotFound'
import Header from '../navi/Header'
import Footer from '../Foot/Footer'
import Login from '../login/Login'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import AddOrUpdatePost from '../Posts/AddOrUpdatePost'

function App() {
  return (
    <Container className="container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/postadd" element={<AddOrUpdatePost />} />
          <Route path="/postadd/:postId" element={<AddOrUpdatePost />} />

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </Container>
  )
}

export default App
