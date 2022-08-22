import axios from 'axios'

const deleteAxios = (todoList) => {
  return axios.delete(`http://localhost:3002/api/v1/todos/${todoList.id}`)
}

export default deleteAxios
