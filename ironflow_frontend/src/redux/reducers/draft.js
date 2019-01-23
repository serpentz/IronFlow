let initialState = {
  statement: "",
  categories: []
};

const draftReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return { ...oldState, categories: action.category };
    case "DELETE_CATEGORY":
      return { ...oldState, selected: action.question };
    case "QUESTION_STATEMENT_CHANGE":
      return {
        ...oldState,
        statement: action.statement
      };

    default:
      return oldState;
  }
};

export default draftReducer;
