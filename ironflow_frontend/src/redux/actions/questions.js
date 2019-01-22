import {GRAPH_QL_ENDPOINT} from '../../constants'
import { request } from 'graphql-request'




const createQuestion = (question) => {

let  mutation = `question: ${JSON.stringify(question).replace(/\"([^(\")"]+)\":/g,"$1:")}`

  let formatedMutation = `mutation {
                            createQuestion(${mutation}){
                              errors
                            }
                          }`
  return dispatch => {
     dispatch({type: "CREATE_QUESTION_ATTEMPT"})

     return request(GRAPH_QL_ENDPOINT,formatedMutation)
             .then(response => {

               dispatch({type: "CREATE_QUESTION_RESPONSE", payload: response.error})
             })

  }
}

const fetchQuestions = (query = `{ questions { categories { id title } id statement answers { id statement user {  id name email } } user { id name email } } }`) => {

       return (dispatch) => {
           dispatch({type: "GET_QUESTIONS_ATTEMPT"})
           return request(GRAPH_QL_ENDPOINT,query)
                   .then(response => {
                     debugger
                     dispatch({type: "GET_QUESTIONS_RESPONSE", payload: response.questions})
                   })

       }
   }

export  {
  fetchQuestions,
  createQuestion
}
