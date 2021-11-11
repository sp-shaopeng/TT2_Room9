import React, {useState, useEffect} from "react";
import "./ProjectView.css"
import mockExpense from "../data/expense.json"
import userService from './UserService'
import { Button, Modal } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";


const renderTableData = (props) => {

    const { project_id, category_id,
            name, description, amount,
            created_at, created_by,
            updated_at, updated_by } = props
  
    return (
      <tbody>
        <tr key={project_id} //onClick = {handleClick}
        >
            <td>{project_id}</td>
            <td>{category_id}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{amount}</td>
            <td>{created_at}</td>
            <td>{created_by}</td>
            <td>{updated_at}</td>
            <td>{updated_by}</td>
        </tr>
      </tbody>
    )
  }


const ExpenseView = () => {
    const [expenses, setExpenses] = useState()
    const {state} = useLocation();
    const project_id = 2;

    const fetchData = () => {
        return userService.getExpenses(project_id).then((response) => {
            const myExpenses = response.data
            setExpenses(myExpenses)
            console.log(expenses)
        })
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
              </tr>
            </thead>
            {expenses?.map((props) => {
           return renderTableData(props)
        })}
          </table>
          <button onClick = {handleShow}>
            Click here to update expense data
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
    
    export default ExpenseView
    // const[transactions,settransactions] = useState(data);
    // const[addFormData,setAddFormData] = useState({
    //     project_id: '',
    //     category_id: '',
    //     name: '',
    //     description: '',
    //     amount:'',
    //     created_at: '',
    //     created_by:'',
    //     updated_at:'',
    //     updated_by:''
    // })

    // const handleAddFormChange = (event) => {
    //     event.preventDefault();
    //     const fieldName = event.target.getAttribute('name');
    //     const fieldValue = event.target.value;
    //     const newFormData = {...addFormData};
    //     newFormData[fieldName] = fieldValue;
    //     setAddFormData(newFormData)
    // };

    // const handleAddFormSubmit = (event) => {
    //     event.preventDefault();
    //     const newContact = {
    //         id: nanoid(),
    //         project_id: addFormData.project_id,
    //         category_id: addFormData.category_id,
    //         name: addFormData.name,
    //         description: addFormData.description,
    //         amount:addFormData.amount,
    //         created_at: addFormData.created_at,
    //         created_by:addFormData.created_by,
    //         updated_at:addFormData.updated_at,
    //         updated_by:addFormData.updated_by,
    //     };
    //     const newContacts = [...transactions,newContact]
    //     settransactions(newContacts);
    // }

//     return (
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Project ID</th>
//                         <th>Category ID</th>
//                         <th>Transaction Name</th>
//                         <th>Description</th>
//                         <th>Amount</th>
//                         <th>Created on</th>
//                         <th>Created by</th>
//                         <th>Updated on</th>
//                         <th>Updated by</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {transactions.map((transaction)=>
//                     <tr>
//                         <td>{transaction.project_id}</td>
//                         <td>{transaction.category_id}</td>
//                         <td>{transaction.name}</td>
//                         <td>{transaction.description}</td>
//                         <td>{transaction.amount}</td>
//                         <td>{transaction.created_at}</td>
//                         <td>{transaction.created_by}</td>
//                         <td>{transaction.updated_at}</td>
//                         <td>{transaction.updated_by}</td>
//                     </tr>
//                     )}
//             </tbody>
//             </table>

//         <h2>Add Transaction</h2>
//         <form onSubmit = {handleAddFormSubmit}>
//                 <input type ="text" name = "project_id" required="required" placeholder = "Project ID" onChange = {handleAddFormChange}/>
//                 <input type ="text" name = "category_id" required="required" placeholder = "Category ID" onChange = {handleAddFormChange}/>
//                 <input type ="text" name = "name" required="required" placeholder = "Transaction Name" onChange = {handleAddFormChange}/>
//                 <input type ="text" name = "description" required="required" placeholder = "Description" onChange = {handleAddFormChange}/>
//                 <input type ="text" name = "amount" required="required" placeholder = "Amount" onChange = {handleAddFormChange}/>
//                 <input type ="text" name = "created_at" required="required" placeholder = "Created on" onChange = {handleAddFormChange}/>
//                 <input type ="text" name = "created_by" required="required" placeholder = "Created by" onChange = {handleAddFormChange}/>
//                 <input type ="text" name = "updated_at" required="required" placeholder = "Updated on" onChange = {handleAddFormChange}/>
//                 <input type ="text" name = "updated_by" required="required" placeholder = "Updated by" onChange = {handleAddFormChange}/>
//                 <button type = "submit">Add Transaction</button>
//         </form>
//         </div>
//     )
// }

// export default ExpenseView

