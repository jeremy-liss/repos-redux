var initialState = {
  tableVisible: false,
  showError: false,
  repos: []
}

var newState = {}

function repos (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_REPOS':
      newState.repos = action.repos
      newState.tableVisible = true
      newState.showError = false
      console.log(newState);
      return newState

    case 'RECEIVE_ERORR':
      newState.errorMessage = action.error
      newState.tableVisible = false
      newState.showError = true
      return newState

    case 'SORT_REPOS':
      newState.repos = action.repos
      newState.tableVisible = true
      newState.showError = false
      return newState

    default:
      return state
  }
}

export default repos
