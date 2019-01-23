import { GRAPH_QL_ENDPOINT } from "../../constants";
import { request } from "graphql-request";

const createQuestion = () => {
  //put in callback for the question as well
  return (dispatch, getState) => {
    let token = { token: localStorage.getItem("token") };

    let parsedQuestion = `question: ${JSON.stringify(getState().draft).replace(
      /\"([^(\")"]+)\":/g,
      "$1:"
    )}`;
    let parsedUser = `user: ${JSON.stringify(token).replace(
      /\"([^(\")"]+)\":/g,
      "$1:"
    )}`;

    let formatedMutation = `mutation {
                              createQuestion(${parsedQuestion}, ${parsedUser}){
                                errors
                              }
                            }`;
    dispatch({ type: "CREATE_QUESTION_ATTEMPT" });

    return request(GRAPH_QL_ENDPOINT, formatedMutation).then(response => {
      dispatch({ type: "CREATE_QUESTION_RESPONSE", payload: response.error });
    });
  };
};

const fetchQuestions = (
  query = `{ questions { view_count categories { id title } id statement answers { id statement user {  id name email image_url} } user { id name email image_url} } }`
) => {
  return dispatch => {
    dispatch({ type: "GET_QUESTIONS_ATTEMPT" });
    return request(GRAPH_QL_ENDPOINT, query).then(response => {
      dispatch({ type: "GET_QUESTIONS_RESPONSE", payload: response.questions });
    });
  };
};

const selectQuestion = question => {
  return { type: "SELECT_QUESTION", question };
};

//Question Creation

const addCategory = category => {
  return { type: "ADD_CATEGORY", category };
};
const deleteCategory = category => {
  return { type: "DELETE_CATEGORY", category };
};
const onChangeStatement = statement => {
  return { type: "QUESTION_STATEMENT_CHANGE", statement };
};
const submitAnswer = answer => {
  //put in callback for the question as well

  let token = { token: localStorage.getItem("token") };

  let parsedAnswer = `answer: ${JSON.stringify({
    statement: answer.statement,
    question_id: answer.question_id
  }).replace(/\"([^(\")"]+)\":/g, "$1:")}`;
  let parsedUser = `user: ${JSON.stringify(token).replace(
    /\"([^(\")"]+)\":/g,
    "$1:"
  )}`;

  let formatedMutation = `mutation {
                              createAnswer(${parsedAnswer}, ${parsedUser}){
                                errors
                              }
                            }`;

  return dispatch => {
    dispatch({ type: "CREATE_ANSWER_ATTEMPT" });
    return request(GRAPH_QL_ENDPOINT, formatedMutation).then(response => {
      dispatch({ type: "CREATE_ANSWER_RESPONSE", payload: response.error });
    });
  };
};

export {
  fetchQuestions,
  createQuestion,
  selectQuestion,
  addCategory,
  submitAnswer,
  deleteCategory,
  onChangeStatement
};
