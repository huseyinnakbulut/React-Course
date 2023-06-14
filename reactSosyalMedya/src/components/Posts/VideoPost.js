import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postActions from '../../redux/actions/postActions'

import { Card, Grid, Text, Button, Row } from '@nextui-org/react'

class ImagePost extends Component {
  componentDidMount() {
    this.props.actions.getPostsWithCategory(2)
  }
  render() {
    return (
      <div>
        {this.props.posts.map((post) => (
          <Grid.Container gap={2}>
            <Grid sm={12} md={12}>
              <Card className="col-12">
                <iframe
                  width="100%"
                  height="480"
                  src={post.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <Card.Header>
                  <Text b>{post.content}</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: '$10' }}>
                  <Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                  <Row justify="flex-end">
                    <Button size="sm" light>
                      Yorum Yap
                    </Button>
                    <Button size="sm">Beğen</Button>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postListReducer,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPostsWithCategory: bindActionCreators(
        postActions.getPostsWithCategory,
        dispatch
      ),
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ImagePost)
//USEEFFECT İLE VERİYİ ÇEK.
