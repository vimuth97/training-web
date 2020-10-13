export const addTodo = (title,text) => ({
  type: 'ADD_TODO',
  key: Date.now(),
  text :text,
  title: title
})

 

