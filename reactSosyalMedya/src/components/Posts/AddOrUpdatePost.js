// import React, { useEffect, useState } from 'react'
// import { connect } from 'react-redux'
// import { getCategories } from '../../redux/actions/categoryActions'
// import { savePost } from '../../redux/actions/postActions'
// import PostDetail from './PostDetail'
// function AddOrUpdatePost({
//   posts,
//   categories,
//   getPosts,
//   getCategories,
//   savePost,
//   history,
//   ...props
// }) {
//   const [post, setPost] = useState({ ...props.post })
//   const [errors, setErrors] = useState({})
//   useEffect(() => {
//     if (categories.length === 0) {
//       getCategories()
//     }
//     setPost({ ...props.post })
//   }, [props.post])

//   function handleChange(event) {
//     const { name, value } = event.target
//     setPost((previousPost) => ({
//       ...previousPost,
//       [name]: name === 'categoryId' ? parseInt(value, 10) : value,
//     }))

//     validate(name, value)
//   }

//   function validate(name, value) {
//     if (name === 'content' && value === '') {
//       setErrors((previousErrors) => ({
//         ...previousErrors,
//         content: 'Post içeriği olmalıdır',
//       }))
//     } else {
//       setErrors((previousErrors) => ({
//         ...previousErrors,
//         content: '',
//       }))
//     }
//   }

//   function handleSave(event) {
//     event.preventDefault()
//     savePost(post).then(() => {
//       history.push('/')
//     })
//   }

//   return (
//     <PostDetail
//       post={post}
//       categories={categories}
//       onChange={handleChange}
//       onSave={handleSave}
//       errors={errors}
//     />
//   )
// }

// export function getPostById(posts, postId) {
//   let post = posts.find((post) => post.id == postId) || null
//   return post
// }

// function mapStateToProps(state, ownProps) {
//   const postId = ownProps.match.params.postId
//   const post =
//     postId && state.postListReducer.length > 0
//       ? getPostById(state.postListReducer, postId)
//       : {}
//   return {
//     post,
//     posts: state.postListReducer,
//     categories: state.categoryListReducer,
//   }
// }

// const mapDispatchToProps = {
//   getCategories,
//   savePost,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdatePost)

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../../redux/actions/categoryActions'
import { savePost } from '../../redux/actions/postActions'
import PostDetail from './PostDetail'

function AddOrUpdatePost({ categories, getCategories, savePost, history }) {
  const [post, setPost] = useState({})

  useEffect(() => {
    if (categories.length === 0) {
      getCategories()
    }
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setPost((previousPost) => ({
      ...previousPost,
      [name]: name === 'categoryId' ? parseInt(value, 10) : value,
    }))
  }

  // function handleSave(event) {
  //   event.preventDefault()
  //   savePost(post).then(() => {
  //     history.push('/')
  //   })
  // }
  function handleSave(event) {
    event.preventDefault()
    savePost(post).then(() => {
      // Kaydetme işlemi tamamlandıktan sonra yapılacak işlemler
      // Örneğin, bir bildirim göstermek veya sayfayı yenilemek gibi

      // Bildirim gösterme örneği:
      alert('Post başarıyla kaydedildi')

      // Sayfayı yenileme örneği:
      window.location.reload()
    })
  }
  return (
    <PostDetail
      post={post}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
    />
  )
}

function mapStateToProps(state) {
  return {
    categories: state.categoryListReducer,
  }
}

const mapDispatchToProps = {
  getCategories,
  savePost,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdatePost)
