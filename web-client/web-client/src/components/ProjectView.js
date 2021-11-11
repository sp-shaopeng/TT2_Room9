import React, {useEffect, useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import './ProjectView.css'
import { Link } from "react-router-dom";
import UserService from './UserService'
import { useNavigate } from 'react-router-dom';

const RenderTableData = (props, setSelectedID, setSelected) => {
  
  const { id, user_id, name, budget, description } = props

  const handleClick = () => {
    setSelectedID(id)
    setSelected(true)
  }

  return (
    <tbody>
      <tr key={id} onClick = {handleClick}>
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

  const navigate = useNavigate()
  const [projects, setProjects] = useState()
  const [selectedID, setSelectedID] = useState("")
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (selected)
      navigate('/expenseView', { state: selectedID }) 
  }, [selected])

  const fetchData = () => {
    return UserService.getProjects().then((response) => {
      const myProjects = response.data
      setProjects(myProjects)
      console.log(projects)
    })
  }

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
        {projects?.map((props) => {
           return RenderTableData(props, setSelectedID, setSelected)
        })}
      </table>
    </div>
  )
}

export default ProjectView