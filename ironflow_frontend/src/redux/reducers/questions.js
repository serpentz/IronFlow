let initialState = {
  questions: []
}

const questionsReducer = (oldState = initialState, action) => {

  switch (action.type) {
    case "GET_QUESTIONS_ATTEMPT": return oldState
    case "GET_QUESTIONS_RESPONSE":
      if (action.payload){
                  return {questions: action.payload}
              } else {
                  return oldState
              }

  case "CREATE_QUESTION_ATTEMPT": return oldState
  case "CREATE_QUESTION_RESPONSE":
    if (action.payload){
                return {...oldState, errors: action.payload}
            } else {
                return oldState
            }

}
  return oldState
}

export default questionsReducer
