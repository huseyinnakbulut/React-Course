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

  function handleSave(event) {
    event.preventDefault()
    savePost(post).then(() => {
      alert('Post başarıyla kaydedildi')

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
