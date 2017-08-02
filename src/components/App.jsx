import React from 'react'

import RepoList from './RepoList'

var App = React.createClass({

  render: function () {
    return (
      <div>
        <h2>Public Repos per User</h2>
        <RepoList />
      </div>
    )
  }
})

export default App
