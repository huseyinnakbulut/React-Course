import React from 'react'
import TextInput from '../toolbox/TextInput'
import SelectInput from '../toolbox/SelectInput'

const PostDetail = ({ categories, post, onSave, onChange, errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{post.id ? 'Güncelle' : 'Ekle'}</h2>
      <TextInput
        name="content"
        label="POST Content"
        value={post.content}
        onChange={onChange}
      />

      <SelectInput
        name="categoryId"
        label="Category"
        value={post.categoryId || ''}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
      />
      {/* <SelectInput
        name="categoryId"
        label="Category"
        value={post.categoryId || ''}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
      /> */}
      <TextInput
        name="image"
        label="Post Image"
        value={post.image}
        onChange={onChange}
      />
      <TextInput
        name="video"
        label="Post Video"
        value={post.video}
        onChange={onChange}
      />

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  )
}

export default PostDetail
