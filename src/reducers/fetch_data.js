const initialState = {
  data: [],
  loading: false,
  error: false,
};

const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_DATA":
      return {
        data: [],
        loading: true,
        error: false,
      };
    case "REQUEST_DATA_SUCCESS":
      for (var i = 1; i < action.data.length; i++) {
        state.data.push(action.data[i]);
      }
      return {
        data: state.data,
        loading: false,
        error: false,
      };
    case "REQUEST_DATA_FAIL":
      return {
        data: [],
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default reducerData;
