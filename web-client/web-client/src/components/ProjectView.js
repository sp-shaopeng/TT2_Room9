import React, {useEffect, useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import './ProjectView.css'
import { Link } from "react-router-dom";
import userService from './userService'
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
      navigate('/expenseView', { selectedID }) 
  }, [selected])

  const fetchData = () => {
    return userService.getProjects().then((response) => {
      const myProjects = response.data
      setProjects(myProjects)
      console.log(projects)
    })
  }
  
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

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
      <button onClick = {handleShow}>
        Click Me!
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Expense Data Here
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick= {handleClose}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectView