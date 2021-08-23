export const getQueryObjectFromState = (state) => {
  const queryObject = {}

  if (state.rate) {
    queryObject.rate = state.rate
  }

  if (state.price.min) {
    queryObject.price_gte = state.price.min
  }
  if (state.price.max) {
    queryObject.price_lte = state.price.max
  }

  if (state.searchString !== "") {
    queryObject.name_like = state.searchString
  }

  if (state.sortMode !== "default") {
    [queryObject._sort, queryObject._order] = state.sortMode.split("_")
  }

  return queryObject
}

export const getQueryObjectFromString = (string) => {
  const queryObject = JSON.parse(
    '{"' + decodeURI(string.substr(1).replace(/&/g, '","').replace(/=/g, '":"')) + '"}'
  )
  return queryObject
}

export const getStateFromQueryObject = (object) => {
  const state = {
    category: 'best-foods',
    price: {
      min: 0,
      max: null
    },
    rate: 0,
    searchString: '',
    sortMode: 'default'
  }

  if (object.category) {
    state.category = object.category
  }

  if (object.price_lte) {
    state.price.max = Number.parseFloat(object.price_lte)
  }
  if (object.price_gte) {
    state.price.min = Number.parseFloat(object.price_gte)
  }

  if (object.rate) {
    state.rate = Number.parseFloat(object.rate)
  }

  if (object.name_like) {
    state.searchString = object.name_like
  }

  if (object._sort) {
    state.sortMode = `${object._sort}_${object._order}`
  }

  return state
}