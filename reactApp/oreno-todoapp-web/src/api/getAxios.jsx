import axios from 'axios'

const getAxios = () => {
  return axios.get('http://localhost:3002/api/v1/todos')
    .then(res => {
    // console.log(resp.data)
    const data = res.data.sort((a, b)=>a.id - b.id)
    // rea.data:オブジェクトの配列
    return data
    })
    .catch(e => {
    console.log(e);
    }
  )
}

export default getAxios