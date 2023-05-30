import React from 'react'
import {
  Card,
  CardBody,
  CardText,
  Button,
  CardTitle,
  CardImg,
  Col,
  Row,
} from 'reactstrap'

function Journel({ cards }) {
  return (
    <div>
      <Row>
        {cards.map((card, index) => (
          <Col sm="4">
            <div style={{ margin: 10 }}>
              <Card key={index + 1} color="light" style={{ width: '30rem' }}>
                <CardImg
                  top
                  width="100%"
                  src={card.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{card.title}</CardTitle>
                  <CardText>{card.text}</CardText>
                  <Button color="success">Detaylar</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}
export default Journel
