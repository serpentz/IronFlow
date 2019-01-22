import {GRAPH_QL_ENDPOINT} from '../../constants'

const options = (body) => {
  return {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }
}

const login = (query) => {

       return (dispatch) => {
           dispatch({type: "LOGIN_ATTEMPT"})
           return fetch(GRAPH_QL_ENDPOINT, options(query))
                   .then(res => res.json())
                   .then(response => {
                     // this.setToken(res)
                     dispatch({type: "LOGIN_RESPONSE", payload: response})
                   }
                   )
                   .catch(err => console.warn(err))
       }
   };



const logout = () => {
  localStorage.clear()
  return { type: 'LOGOUT' }
}


export  {
  logout,
  login
}
