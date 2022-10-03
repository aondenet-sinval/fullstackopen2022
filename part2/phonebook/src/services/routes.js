import axios from 'axios';

const url = "http://localhost:3001/persons"
const getAll = ()=>{
  return axios.get(`${url}`)
}

const create = nameObject => {
  return axios.post(`${url}`, nameObject)
}

const update = (id, nameObject) => {
  console.log('id ', id);
  return axios.put(`${url}/${id}`, nameObject)
}

const trash = (id) => {
  return axios.delete(`${url}/${id}`)
}

export default { getAll, create, update, trash }
