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
import Post from '../Posts/Post'
import ImagePost from '../Posts/ImagePost'
import VideoPost from '../Posts/VideoPost'
import HaberlerPost from '../Posts/HaberlerPost'

function App() {
  return (
    <Container className="container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<h2>HOŞGELDİNİZ</h2>} />

          <Route path="/postadd" element={<AddOrUpdatePost />} />
          {/* <Route path="/postadd/:postId" element={<AddOrUpdatePost />} /> */}
          <Route path="/allposts" element={<Post />} />
          <Route path="/imageposts" element={<ImagePost />} />
          <Route path="/videoposts" element={<VideoPost />} />
          <Route path="/normalposts" element={<HaberlerPost />} />

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </Container>
  )
}

export default App
