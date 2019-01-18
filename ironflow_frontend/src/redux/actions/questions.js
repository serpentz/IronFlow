import {GRAPH_QL_ENDPOINT} from '../../constants'
import { request } from 'graphql-request'




const createQuestion = (mutation) => {
  return dispatch => {
     dispatch({type: "CREATE_QUESTION_ATTEMPT"})
     return request(GRAPH_QL_ENDPOINT,mutation)
             .then(response => {
               dispatch({type: "CREATE_QUESTION_RESPONSE", payload: response.data})
             })

  }
}

const fetchQuestions = (query = `{ questions { id statement answers { id statement user {  id name email } } user { name email } } }`) => {

       return (dispatch) => {
           dispatch({type: "GET_QUESTIONS_ATTEMPT"})
           return request(GRAPH_QL_ENDPOINT,query)
                   .then(response => {
                     dispatch({type: "GET_QUESTIONS_RESPONSE", payload: response.questions})
                   })

       }
   }

export  {
  fetchQuestions,
  createQuestion
}
