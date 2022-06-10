export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHECK':
      let newState =  state.map((todo) => {
        if(todo.id === action.id){
          return {...todo, complete: !todo.complete};
        }else{
          return todo;
        }
      })
      localStorage.setItem('state', JSON.stringify(newState));
      let localStorageItem = JSON.parse(localStorage.getItem('state'));
      console.log(localStorageItem)
      return newState;
    default:
      return state;
  }
};