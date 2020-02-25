const userAPIKEY = `9f1dfce0c33d520203276ccf628a6c26`
const url =  `https://gateway.marvel.com/v1/public/characters`
const params = `limit=100&apikey=${userAPIKEY}`
let offsetVal = 0;


// export function apiCall() {
//   return new Promise((resolve, reject) => {
//     fetch(`${url}?${params}`)
//     .then((res) => {
//         resolve(res.json())
//     })
//   })
// }

export async function apiCall() {
  const response = await fetch(`${url}?${params}`)
  const data = await response.json()

  return data
}

// export function heroCall(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`${url}/${id}?${params}`)
//     .then((res) =>{
//       return res.json()
//     })
//     .then(data => {
//       console.log(data.data.results)
//     })
//   })
// }

export async function heroCall(id) {
  const response = await fetch(`${url}/${id}?${params}`)
  const data = await response.json()

  return data.data.results[0]
}

export async function heroComics(id){
  const response = await fetch(`${url}/${id}/comics?${params}`)
  const data = await response.json()
  
  return data.data.results
}

export function loadMore(){
  offsetVal+=100
  return new Promise((resolve, reject) => {
    fetch(`${url}?offset=${offsetVal}&${params}`)
    .then((res) => {
        resolve(res.json())
    })
  })
}

