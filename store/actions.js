import request from '~/service'

const api = '/api'
const japi = '/japi'
const rapi = '/rapi'
const tapi = '/tapi'
const xapi = '/xapi'

export const banner = async (store, params) => {
  return await request.get(`${api}/v1/get_banner`, params)
}

export const categories = async (store, params) => {
  return await request.get(`${japi}/v1/categories`, params)
}

export const recommends = async (store, params) => {
  return await request.get(`${rapi}/v1/get_recommended_entry`, params)
}

export const entries = async (store, params) => {
  return await request.get(`${tapi}/v1/get_entry_by_rank`, params)
}

export const lists = async (store, params) => {
  return await request.get(`${xapi}/v1/getListByLastTime`, params)
}
