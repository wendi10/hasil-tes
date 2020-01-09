import config from '../config'
import apisauce from 'apisauce'

const universityURL = config.universityURL

const create = (baseURL = universityURL) => {
  const apiUniversity = apisauce.create({
    baseURL,
    timeout: 60000,
    headers: {
      'Accept': 'application/json',
      "Content-type": "application/json",
    },
    dataType: 'jsonp'
  })

  // https://jsonplaceholder.typicode.com/todos/1
  const getUniversity = (data) => {
    return apiUniversity.get('search', {}, { params: data })
  }

  // const getSearchUniversity = (data) => {
  //   return apiUniversity.get(`search`, {}, {params:data})
  // }

  return {
    getUniversity
    // getSearchUniversity
  }
}

export default {
  create
}
