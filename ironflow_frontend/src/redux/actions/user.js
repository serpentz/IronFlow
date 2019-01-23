import {GRAPH_QL_ENDPOINT} from '../../constants'
import { request } from 'graphql-request'


const logIn = (query) => {

  let user = `user: ${JSON.stringify(query).replace(/\"([^(\")"]+)\":/g,"$1:")}`
  let formatedQuery =
  `mutation {
    loginUser(${user}) {
      user {
        id
        email
        profile {
          id
        }
        answers{
          id
          statement
        }
        questions{
          id
          statement
          answers{
            id
            statement
            user{
              id
              name
            }
          }
        }
      }
      errors
      token
    }
  }
  `


       return (dispatch) => {
           dispatch({type: "LOGIN_ATTEMPT"})
           return request(GRAPH_QL_ENDPOINT,formatedQuery)
                   .then(response => {
                     if(!response.loginUser.token){
                       dispatch({type: "CREATE_USER_RESPONSE_ERROR", payload: "incorrect password or email"})
                     }else{
                       localStorage.setItem('token',response.loginUser.token)
                       dispatch({type: "CREATE_USER_RESPONSE_SUCCESS", payload: response.loginUser.user})
                     }

                   }
                   )
                   .catch(err => console.warn(err))
       }
   };

const signUp = (user) => {
let mutation = `user: ${JSON.stringify(user).replace(/\"([^(\")"]+)\":/g,"$1:")}`
let formatedMutation =`mutation {
                  createUser(${mutation} ) {
                    user {
                      id
                      email
                    }
                    errors
                    token
                  }
                }`

    return dispatch => {
       dispatch({type: "CREATE_USER_ATTEMPT"})

       return request(GRAPH_QL_ENDPOINT,formatedMutation)
               .then(response => {
                 debugger
                 if(response.createUser.errors){
                   dispatch({type: "CREATE_USER_RESPONSE_ERROR", payload: response.createUser.errors})
                 }else{
                   localStorage.setItem('token',response.createUser.token)
                   dispatch({type: "CREATE_USER_RESPONSE_SUCCESS", payload: response.createUser.user})
                 }

               })

    }
   };



const logout = () => {
  localStorage.clear()
  return { type: 'LOGOUT_ATTEMPT' }
}


export  {
  logout,
  logIn,
  signUp
}
