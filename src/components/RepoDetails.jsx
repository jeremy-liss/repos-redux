import React from 'react'

function RepoDetails (props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.created_at}</td>
      <td><button onClick={() => props.hideRepo(props.id)}>Hide</button></td>
    </tr>
  )
}

export default RepoDetails
