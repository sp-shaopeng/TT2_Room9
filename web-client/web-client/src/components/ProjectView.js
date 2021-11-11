import React from 'react'
import {mockProjects} from '../data/mockProjects'
import './ProjectView.css'
import { Link } from "react-router-dom";

const renderTableData = (props, onClick) => {
  const { id, user_id, name, budget, description } = props

  return (   
        <tbody>
          <tr key={id} onClick = {onClick} >
              <td>{id}</td>
              <td>{user_id}</td>
              <td>{name}</td>
              <td>{budget}</td>
              <td>{description}</td>
          </tr>
        </tbody>
  )
}

const ProjectView = () => {
  return (
    <div>
      <nav>
            <ul>
            <li>
                <Link to="/" 
                    // onClick={signOut()}
                >
                    Sign out
                </Link>
            </li>
            </ul>
        </nav>
      <h1>Project View</h1>
      <table class="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Budget</th>
            <th>Description</th>
          </tr>
        </thead>
        {mockProjects.map(function(props){
          return renderTableData(props)
        })}
      </table>
    </div>
  )
}

export default ProjectView