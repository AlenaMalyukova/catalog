import axios from '../plugins/axios.js'

export const getAgent = () => {

  const searchCities = async (term) => {
    return await axios({
      method: 'GET',
      url: '/city',
      params: {
        term: term,
        country: 'ru',
      }
    })
  }

  const getCity = async (id) => {
    return await axios({
      method: 'GET',
      url: '/city',
      params: {
        country: 'ru',
        id: id,
      }
    })
  }

  const searchCategories = async (id) => {
    return await axios({
      method: 'GET',
      url: '/menutags',
      params: {
        city_id: id
      }
    })
  }

  const getAllProducts = async (cityId, categorySlug) => {
    return await axios({
      method: 'GET',
      url: `/menutags/${categorySlug}`,
      params: {
        city_id: cityId
      }
    })
  }

  return { 
    searchCities,
    getCity,
    searchCategories,
    getAllProducts,
  }
}