export const addTodo = (title, text) => {
  return { type: "ADD_TODO", key: Date.now(), text: text, title: title };
};

export const requestData = () => {
  return { type: "REQUEST_DATA" };
};

export const requestDataSuccess = (data) => {
  return { type: "REQUEST_DATA_SUCCESS", data: data };
};

export const requestDataError = () => {
  return { type: "REQUEST_DATA_FAIL" };
};

export const fetchData = () => {
  return { type: "FETCH_DATA" };
};

export const currentState = (state) => {
  return { type: "CURRENT_STATE", state };
};

export const refresh = () => {
  return { type: "REFRESH" };
};
