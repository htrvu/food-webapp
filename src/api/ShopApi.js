import axiosConfig from './axiosClient'

const ShopApi = {
  getAll: (category, params) => {
    return axiosConfig.get(`/${category}`, {params})
  },
  get: (category, id) => {
    return axiosConfig.get(`/${category}/${id}`)
  }
}

export default ShopApi