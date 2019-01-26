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
const getProfile = (stringToken) => {

  let token = `token:  "${stringToken}"`
  let formatedQuery =
  `mutation {
    getProfile(${token}) {
      user {
        id
        email
        name
        image_url
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
              image_url
              id
              name
            }
          }
        }
      }
      errors
    }
  }
  `


       return (dispatch) => {
           dispatch({type: "LOGIN_ATTEMPT"})
           return request(GRAPH_QL_ENDPOINT,formatedQuery)
                   .then(response => {
                     if(response.getProfile){
                       dispatch({type: "CREATE_USER_RESPONSE_SUCCESS", payload: response.getProfile.user})
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

const selectProfile = user_id => {

let query = `{
         user(id: ${user_id}){
           name
           email
           image_url
          questions{
            id
            statement
            categories{
              title
            }
          }
          answers{
            id
            statement
            question{
              statement
              categories {
                   title
                 }
            }
          }
        }
      }`
      return dispatch => {

         return request(GRAPH_QL_ENDPOINT,query)
                 .then(response => {
                   if(response.user){
                     dispatch({type: "SELECT_PROFILE", payload: response.user})
                   }else{
                    alert("response")
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
  signUp,
  getProfile,
  selectProfile
}
