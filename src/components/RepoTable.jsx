import React from 'react'
import { connect } from 'react-redux'

import RepoDetails from './RepoDetails'
import { recieveSortedRepos } from '../actions/index'

function hideRepo (repos, id) {
  repos.map(repo => {
    if (id === repo.id) {
      repo.visible = false
    }
  })
  this.state.hiddenRepos ++
}

function RepoTable (props) {

  function sortRepos (key) {
    props.repos.sort((currentRepo, nextRepo) => {
      var currentKey = currentRepo[key]
      var nextKey = nextRepo[key]
      return ((currentKey < nextKey) ? -1 : ((currentKey > nextKey) ? 1 : 0))
    })
    props.dispatch(recieveSortedRepos(props.repos))
  }

  return (
    <div>
      <h3>Sort By:
        <a href="#" onClick={() => sortRepos('id')}>ID</a>-
        <a href="#" onClick={() => sortRepos('name')}>Name</a>
      </h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>created_at</th>
          </tr>
        </thead>
        {props.repos.map(repo => {
          return (
            <tbody key={repo.id}>
               <RepoDetails id={repo.id} name={repo.name} description={repo.description} created_at={repo.created_at} hideRepo={hideRepo} />
            </tbody>
          )
        })}
      </table>
      {props.hiddenRepos > 0 && <h3>Hidden Repos: {props.hiddenRepos}</h3>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch
  }
}

export default connect (mapStateToProps)(RepoTable)
