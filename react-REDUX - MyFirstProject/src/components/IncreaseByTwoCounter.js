import React, { Component } from 'react'
import { increaseByTwoCounter } from '../redux/actions/counterActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'reactstrap'

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <Button
          color="success"
          onClick={(e) => this.props.dispatch(increaseByTwoCounter())}
        >
          Increase By Two
        </Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) }
}
export default connect(mapDispatchToProps)(IncreaseByTwoCounter)
