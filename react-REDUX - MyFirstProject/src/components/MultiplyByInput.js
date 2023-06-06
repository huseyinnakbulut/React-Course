import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { multiplyCounter } from '../redux/actions/counterActions'
import { connect } from 'react-redux'

class MultiplyByInput extends Component {
  render() {
    return (
      <div>
        <input
          type="number"
          id="deneme"
          onChange={(e) =>
            this.props.dispatch(
              multiplyCounter(Number(document.getElementById('deneme').value))
            )
          }
        />
        <Button
          color="success"
          onClick={(e) =>
            this.props.dispatch(
              multiplyCounter(Number(document.getElementById('deneme').value))
            )
          }
        >
          Increase
        </Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(multiplyCounter, dispatch) }
}
export default connect(mapDispatchToProps)(MultiplyByInput)
