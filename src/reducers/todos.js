//import { databaseRef } from '../firebase_config'

const initialState = [
  { title: "a", text: "b", key: "1" },
  { title: "a", text: "bssssssssssssss", key: "2" },
];

//var initialState2 = databaseRef.on('value',function(snapshot){
//console.log([snapshot.val().Diarycards["1"].title]);
//return snapshot.val().Diarycards;
//});

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action);
      return [
        ...state,
        {
          key: action.key,
          title: action.title,
          text: action.text,
        },
      ];
    default:
      return state;
  }
};

export default todos;
