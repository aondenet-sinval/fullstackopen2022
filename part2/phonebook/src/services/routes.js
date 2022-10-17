import axios from 'axios';
const url = "http://localhost:3001/persons" //API part2
// const url = "http://localhost:3001/api/persons" //API part3
// const url = "/api/persons" //Heroku
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
