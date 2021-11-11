import React, {useEffect, useState} from 'react'
import {mockProjects} from '../data/mockProjects'
import { Button, Modal } from 'react-bootstrap';
import axios from "axios"
import './ProjectView.css'
import { Link } from "react-router-dom";

const renderTableData = (props, onClick) => {

  const handleClick = () => {
    console.log("clicked!")
  }

  const { id, user_id, name, budget, description } = props

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

  const fetchData = () => {
    return axios.get("").then((response) => console.log(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

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
        {mockProjects.map(function(props){
          return renderTableData(props)
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