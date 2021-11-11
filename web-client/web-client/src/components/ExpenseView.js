import React, {useState, useEffect} from "react";
import "./ProjectView.css"
import UserService from './UserService'
import { Button, Modal } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";


const renderTableData = (props, handleEditShow, handleDelete) => {

    const { project_id, category_id,
            name, description, amount,
            created_at, created_by,
            updated_at, updated_by } = props
  
    return (
      <tbody>
        <tr key={project_id}>
            <td>{project_id}</td>
            <td>{category_id}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{amount}</td>
            <td>{created_at}</td>
            <td>{created_by}</td>
            <td>{updated_at}</td>
            <td>{updated_by}</td>
            <td>    
                <button onClick = {handleEditShow}>Edit Entry</button>
                <button onClick = {handleDelete}>Delete Entry</button>
            </td>
        </tr>
      </tbody>
    )
  }


const ExpenseView = () => {
    const [expenses, setExpenses] = useState()
    const {state} = useLocation();
    const project_id = state;
    console.log(state)

    const fetchData = () => {
        return UserService.getExpenses(project_id).then((response) => {
            const myExpenses = response.data
            setExpenses(myExpenses)
            console.log(expenses)
        })
    }
    
    useEffect(() => {
    fetchData()
    }, [])

    const doDelete = () => {
        
    }

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData)
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        UserService.addExpenses(addFormData.project_id,
                    addFormData.category_id,
                    addFormData.name,
                    addFormData.description,
                    addFormData.amount)

    }
    const[addFormData,setAddFormData] = useState({
        project_id: '',
        category_id: '',
        name: '',
        description: '',
        amount:'',
    })
    const [editShow, setEditShow] = useState(false)

    const handleEditShow = () => setEditShow(true)
    const handleEditClose = () => setEditShow(false)

    return (
        <div>
          <nav>
                <ul>
                <li>
                    <Link to="/">
                        Sign out
                    </Link>
                </li>
                </ul>
            </nav>
          <h1>Expense View</h1>
          <table class="styled-table">
            <thead>
              <tr>
                <th>Project ID</th>
                <th>Category ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Created At</th>
                <th>Created By</th>
                <th>Updated At</th>
                <th>Updated By</th>
                <th>Actions</th>
              </tr>
            </thead>
            {expenses?.map((props) => {
           return renderTableData(props, handleEditShow, doDelete)
        })}
          </table>
          <button onClick = {handleShow}>
            Click here to add expense data
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
              <Modal.Title>Add Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <h2>Add Transaction</h2>
            <form onSubmit = {handleAddFormSubmit}>
                 <input type ="number" name = "project_id" required="required" placeholder = "Project ID" onChange = {handleAddFormChange}/>
                 <input type ="number" name = "category_id" required="required" placeholder = "Category ID" onChange = {handleAddFormChange}/>
                 <input type ="text" name = "name" required="required" placeholder = "Transaction Name" onChange = {handleAddFormChange}/>
                 <input type ="text" name = "description" required="required" placeholder = "Description" onChange = {handleAddFormChange}/>
                 <input type ="number" name = "amount" required="required" placeholder = "Amount" onChange = {handleAddFormChange}/>
                 <button type = "submit">Add Transaction</button>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              {/* <Button variant="primary" onClick= {handleClose}>Add</Button> */}
            </Modal.Footer>
          </Modal>

          
          <Modal
            show={editShow}
            onHide={handleEditClose}
            backdrop="static"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h2>Edit Transaction</h2>
            <form onSubmit = {handleAddFormSubmit}>
                 <input type ="number" name = "project_id" required="required" placeholder = "Project ID" onChange = {handleAddFormChange}/>
                 <input type ="number" name = "category_id" required="required" placeholder = "Category ID" onChange = {handleAddFormChange}/>
                 <input type ="text" name = "name" required="required" placeholder = "Transaction Name" onChange = {handleAddFormChange}/>
                 <input type ="text" name = "description" required="required" placeholder = "Description" onChange = {handleAddFormChange}/>
                 <input type ="number" name = "amount" required="required" placeholder = "Amount" onChange = {handleAddFormChange}/>
                 <button type = "submit">Edit Transaction</button>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleEditClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick= {handleEditClose}>Save</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
    
    export default ExpenseView