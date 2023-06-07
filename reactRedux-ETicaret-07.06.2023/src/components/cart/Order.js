import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Table,
  Col,
  Row,
  Label,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap'

class Order extends Component {
  render() {
    //let totalQuantity = 0
    let totalPrice = 0
    this.props.cart.map((cartItem) => {
      //totalQuantity += cartItem.quantity
      totalPrice += cartItem.product.price * cartItem.quantity
    })
    return (
      <div>
        {/* <h2>Order Detail</h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.product.price * cartItem.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <hr />
        <Table>
          <thead>
            <tr>
              <th>Total Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totalQuantity} Adet</td>
              <td>{totalPrice} TL</td>
            </tr>
          </tbody>
        </Table> */}

        <Row>
          <Col sm="3"></Col>
          <Col sm="6">
            <Form id="form">
              <FormGroup>
                <Label for="name">Name-Surname</Label>
                <Input
                  type="text"
                  name="email"
                  id="inputName"
                  placeholder="Name Surname"
                />
              </FormGroup>
              <FormGroup>
                <Label for="CardNumber">Card Number</Label>
                <Input
                  type="number"
                  name="CardNumber"
                  id="inputCardNumber"
                  placeholder="Card Number"
                />
              </FormGroup>
              <Col sm="6">
                <FormGroup>
                  <Label for="validDate">Validation Date</Label>
                  <Input
                    type="text"
                    name="validDate"
                    id="inputValidDate"
                    placeholder="Validation Date"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="CCV">CCV</Label>
                  <Input
                    type="number"
                    name="CCV"
                    id="inputCCV"
                    placeholder="CCV"
                  />
                </FormGroup>
              </Col>

              <hr></hr>
              <br></br>
              <h2>Total Price: {totalPrice} TL</h2>
              <Button>Complete Order</Button>
            </Form>
          </Col>
          <Col sm="3"></Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  }
}

export default connect(mapStateToProps)(Order)

//---------------------------------------

// import React from 'react'
// import  { Component } from 'react'
// import Styles from './Styles'
// import { Form, Field } from 'react-final-form'
// import Card from './Card'
// import {
//   formatCreditCardNumber,
//   formatCVC,
//   formatExpirationDate,
// } from './cardUtils'

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// const onSubmit = async (values) => {
//   await sleep(300)
//   window.alert(JSON.stringify(values, 0, 2))
// }

//  class Order extends Component {
//   <Styles>
//     <h1>🏁 React Final Form</h1>
//     <h2>Credit Card Example</h2>
//     <a href="https://github.com/erikras/react-final-form#-react-final-form">
//       Read Docs
//     </a>
//     <p>
//       This example demonstrates how to use the amazing{' '}
//       <a
//         href="https://github.com/amarofashion/react-credit-cards"
//         target="_blank"
//       >
//         React Credit Cards
//       </a>{' '}
//       library with your form.
//     </p>
//     <Form
//       onSubmit={onSubmit}
//       render={({
//         handleSubmit,
//         form,
//         submitting,
//         pristine,
//         values,
//         active,
//       }) => {
//         return (
//           <form onSubmit={handleSubmit}>
//             <Card
//               number={values.number || ''}
//               name={values.name || ''}
//               expiry={values.expiry || ''}
//               cvc={values.cvc || ''}
//               focused={active}
//             />
//             <div>
//               <Field
//                 name="number"
//                 component="input"
//                 type="text"
//                 pattern="[\d| ]{16,22}"
//                 placeholder="Card Number"
//                 format={formatCreditCardNumber}
//               />
//             </div>
//             <div>
//               <Field
//                 name="name"
//                 component="input"
//                 type="text"
//                 placeholder="Name"
//               />
//             </div>
//             <div>
//               <Field
//                 name="expiry"
//                 component="input"
//                 type="text"
//                 pattern="\d\d/\d\d"
//                 placeholder="Valid Thru"
//                 format={formatExpirationDate}
//               />
//               <Field
//                 name="cvc"
//                 component="input"
//                 type="text"
//                 pattern="\d{3,4}"
//                 placeholder="CVC"
//                 format={formatCVC}
//               />
//             </div>
//             <div className="buttons">
//               <button type="submit" disabled={submitting}>
//                 Submit
//               </button>
//               <button
//                 type="button"
//                 onClick={form.reset}
//                 disabled={submitting || pristine}
//               >
//                 Reset
//               </button>
//             </div>
//             <h2>Values</h2>
//             <pre>{JSON.stringify(values, 0, 2)}</pre>
//           </form>
//         )
//       }}
//     />
//   </Styles>
//  }

// export default Order
