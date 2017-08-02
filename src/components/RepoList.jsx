import React from 'react'
import RepoTable from './RepoTable'
import { connect } from 'react-redux'
import { getUserAPI } from '../actions/index'

var RepoList = React.createClass({

  getUsername (ev) {
    ev.preventDefault(ev)
    this.props.dispatch(getUserAPI(ev.target.elements[0].value))
  },

  render (props) {
    return (
      <div>
        <form onSubmit={(ev) => this.getUsername(ev)}>
          <input type="text" name="username" placeholder="Enter Username" />
          <button type="submit">Load Repos</button>
        </form>
        {this.props.tableVisible && <RepoTable repos={this.props.repos} />}
        {this.props.showError && <h3>{this.props.errorMessage}</h3>}
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    repos: state.repos.repos,
    errorMessage: state.repos.errorMessage,
    tableVisible: state.repos.tableVisible,
    showError: state.repos.showError
  }
}

export default connect(mapStateToProps)(RepoList)
