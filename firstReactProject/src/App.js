import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'reactstrap'
import Navbar from './Navbar'
import Journel from './Journel'
import Footer from './Footer'
function App() {
  const languages = ['Türkçe', 'İngilizce']
  const notices = ['Güncelleme notları v3.2', 'Bakım çalışması']
  const cards = [
    {
      image: 'https://picsum.photos/800/300/?image=42',
      title: 'Lorem, ipsum dolor.',
      text: 'Slide 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti sint quisquam dolore magnam et fugit quasi illo non iure.',
    },
    {
      image: 'https://picsum.photos/800/300/?image=25',
      title: 'Lorem, ipsum dolor.',
      text: 'Slide 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti sint quisquam dolore magnam et fugit quasi illo non iure.',
    },
    {
      image: 'https://picsum.photos/800/300/?image=345',
      title: 'Lorem, ipsum dolor.',
      text: 'Slide 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti sint quisquam dolore magnam et fugit quasi illo non iure.',
    },
    {
      image: 'https://picsum.photos/800/300/?image=78',
      title: 'Lorem, ipsum dolor.',
      text: 'Slide 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti sint quisquam dolore magnam et fugit quasi illo non iure.',
    },
    {
      image: 'https://picsum.photos/800/300/?image=35',
      title: 'Lorem, ipsum dolor.',
      text: 'Slide 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti sint quisquam dolore magnam et fugit quasi illo non iure.',
    },
    {
      image: 'https://picsum.photos/800/300/?image=52',
      title: 'Lorem, ipsum dolor.',
      text: 'Slide 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti sint quisquam dolore magnam et fugit quasi illo non iure.',
    },
    {
      image: 'https://picsum.photos/800/300/?image=52',
      title: 'Lorem, ipsum dolor.',
      text: 'Slide 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti sint quisquam dolore magnam et fugit quasi illo non iure.',
    },
    {
      image: 'https://picsum.photos/800/300/?image=52',
      title: 'Lorem, ipsum dolor.',
      text: 'Slide 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti sint quisquam dolore magnam et fugit quasi illo non iure.',
    },
    {
      image: 'https://picsum.photos/800/300/?image=52',
      title: 'Lorem, ipsum dolor.',
      text: 'Slide 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti sint quisquam dolore magnam et fugit quasi illo non iure.',
    },
  ]
  return (
    <div>
      <Navbar languages={languages} notices={notices} />
      <Breadcrumb>
        <BreadcrumbItem active>Anasayfa /</BreadcrumbItem>
      </Breadcrumb>
      <Container fluid>
        <Row>
          <Col sm="3"></Col>
          <Col sm="9">
            <Journel cards={cards} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default App
