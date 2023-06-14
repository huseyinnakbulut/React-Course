import * as actionTypes from './actionTypes'

export function getPostSuccess(posts) {
  return { type: actionTypes.GET_POSTS_SUCCESS, payload: posts }
}

export function createPostSuccess(posts) {
  return { type: actionTypes.CREATE_POSTS_SUCCESS, payload: posts }
}

export function updatePostSuccess(posts) {
  return { type: actionTypes.UPDATE_POSTS_SUCCESS, payload: posts }
}

export function savePostApi(post) {
  return fetch('http://localhost:3000/posts/' + (post.id || ''), {
    method: post.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(post),
  })
    .then(handleResponse)
    .catch(handleError)
}

export function savePost(post) {
  return function (dispatch) {
    return savePostApi(post)
      .then((savedPost) => {
        post.id
          ? dispatch(updatePostSuccess(savedPost))
          : dispatch(createPostSuccess(savedPost))
      })
      .catch((error) => {
        throw error
      })
  }
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json()
  }

  const error = await response.text()
  throw new Error(error)
}

export function handleError(error) {
  console.error('Bir hata oluştu')
  throw error
}
export function getPosts() {
  return function (dispatch) {
    let url = 'http://localhost:3000/posts'
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getPostSuccess(result)))
  }
}

export function getPostsWithCategory(categoryId) {
  return function (dispatch) {
    let url = 'http://localhost:3000/posts'
    if (categoryId) {
      url += '?categoryId=' + categoryId
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getPostSuccess(result)))
  }
}
