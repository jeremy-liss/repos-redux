const receiveRepos = (repos) => {
  return {
    type: 'RECEIVE_REPOS',
    repos: repos
  }
}

const receiveError = (error) => {
  return {
    type: 'RECEIVE_ERROR',
    error: error
  }
}

const recieveSortedRepos = (repos) => {
  return {
    type: 'SORT_REPOS',
    repos: repos
  }
}

const getUserAPI = (username) => {
  return (dispatch) => {
    $.ajax('https://api.github.com/users/' + username + '/repos')
    .done(function (data) {
      dispatch(receiveRepos(data))
    })
    .fail(function (jqXHR, textStatus) {
      if (jqXHR.status === 404) {
        dispatch(receiveError('Not Found, Check Username'))
      }
      if (jqXHR.status === 500) {
        dispatch(receiveError('There is a GitHub Server Error'))
      }
      console.log('err:', textStatus)
    })
  }
}

export { getUserAPI, recieveSortedRepos }
