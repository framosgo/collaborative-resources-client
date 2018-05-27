export const loadTags = (store, tags) => (
  { ...store, tags }
)

export const addTag = (store, newTag) => (
  {
    ...store,
    tags: [...store.tags, newTag]
  }
)

export const removeTagByID = (store, tagID) => (
  {
    ...store,
    tags: store.tags.filter(tag => (
      tag.id !== tagID
    ))
  }
)

export const updateTag = (store, newTag) => (
  {
    ...store,
    tags: store.tags.map(tag => (
      tag.id === newTag.id ? newTag : tag
    ))
  }
)
