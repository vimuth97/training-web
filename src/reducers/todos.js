const newTodo = (state = null, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        key: action.key,
        title: action.title,
        text: action.text,
      };
    case "CURRENT_STATE":
      return {
        state: state,
      };
    default:
      return state;
  }
};

export default newTodo;
