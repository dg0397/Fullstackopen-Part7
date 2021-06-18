const notificationReducer = (state = '', action) => {
  switch (action.type) {
  case 'SET_MESSAGE':
    return action.message
  default:
    return state
  }
}

export const setMessage = (message,time) => {
  return function(dispatch){
    dispatch({
      type : 'SET_MESSAGE',
      message
    })
    const t = window.setTimeout(() => {
      dispatch({
        type : 'SET_MESSAGE',
        message : ''
      })
    },time*1000)
    for(let i = 0; i< t ; i++){
      clearTimeout(i)
    }
  }
}
export default notificationReducer