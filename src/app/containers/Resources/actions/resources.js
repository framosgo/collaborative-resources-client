export const loadResources = (store, resources) => (
  { ...store, resources }
)

export const addResource = (store, newResource) => (
  {
    ...store,
    resources: [...store.resources, newResource]
  }
)

export const removeResource = (store, resourceID) => (
  {
    ...store,
    resources: store.resources.filter(resource => (
      resource.id !== resourceID
    ))
  }
)

export const updateResource = (store, newResource) => (
  {
    ...store,
    resources: store.resources.map(resource => (
      resource.id === newResource.id ? newResource : resource
    ))
  }
)
