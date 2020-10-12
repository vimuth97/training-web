const initialState = [
    {title:"a",
         text: "b",
         key:"1"
      },
      {title:"a",
         text: "bssssssssssssss",
         key:"2"
      }
]



const todos = (state = initialState, action) => {
    switch (action.type) {
        
      case 'ADD_TODO':
        console.log(action);
        return [
          ...state,
          {
            key: action.key,
            title: action.title,
            text: action.text,
          }
        ]
      default:
        return state
    }
  }
  
  export default todos