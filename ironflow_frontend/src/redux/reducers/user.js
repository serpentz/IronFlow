let initialState = {
  loggedIn: false,
  currentUser: null,
  errors: ""
}

const userReducer = (oldState = initialState, action) => {

  switch (action.type) {
    case "LOGIN_ATTEMPT": return oldState
    case "LOGIN_RESPONSE":
      if (!action.payload.message){
                let {user,token} = action.payload
                  return {...oldState, loggedIn: true, currentUser: user,token}
              } else {
                  return {...oldState, loggedIn: false}
              }
    case "CREATE_USER_ATTEMPT": return oldState
    case "CREATE_USER_RESPONSE_ERROR":
                  return {...oldState, loggedIn: false, errors: action.payload}
    case "CREATE_USER_RESPONSE_SUCCESS":
                  return {...oldState, loggedIn: true, currentUser: action.payload}
    case "LOGOUT_ATTEMPT": return { currentUser: null, loggedIn : false }

  }
  return oldState
}

export default userReducer
