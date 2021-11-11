import React, {useState} from "react";
import "./ProjectView.css"
import data from "../data/expense.json"
import {nanoid} from "nanoid";

const ExpenseView = () => {
    const[transactions,settransactions] = useState(data);
    const[addFormData,setAddFormData] = useState({
        project_id: '',
        category_id: '',
        name: '',
        description: '',
        amount:'',
        created_at: '',
        created_by:'',
        updated_at:'',
        updated_by:''
    })

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
        const newContact = {
            id: nanoid(),
            project_id: addFormData.project_id,
            category_id: addFormData.category_id,
            name: addFormData.name,
            description: addFormData.description,
            amount:addFormData.amount,
            created_at: addFormData.created_at,
            created_by:addFormData.created_by,
            updated_at:addFormData.updated_at,
            updated_by:addFormData.updated_by,
        };
        const newContacts = [...transactions,newContact]
        settransactions(newContacts);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Project ID</th>
                        <th>Category ID</th>
                        <th>Transaction Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Created on</th>
                        <th>Created by</th>
                        <th>Updated on</th>
                        <th>Updated by</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction)=>
                    <tr>
                        <td>{transaction.project_id}</td>
                        <td>{transaction.category_id}</td>
                        <td>{transaction.name}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.created_at}</td>
                        <td>{transaction.created_by}</td>
                        <td>{transaction.updated_at}</td>
                        <td>{transaction.updated_by}</td>
                    </tr>
                    )}
            </tbody>
            </table>

        <h2>Add Transaction</h2>
        <form onSubmit = {handleAddFormSubmit}>
                <input type ="text" name = "project_id" required="required" placeholder = "Project ID" onChange = {handleAddFormChange}/>
                <input type ="text" name = "category_id" required="required" placeholder = "Category ID" onChange = {handleAddFormChange}/>
                <input type ="text" name = "name" required="required" placeholder = "Transaction Name" onChange = {handleAddFormChange}/>
                <input type ="text" name = "description" required="required" placeholder = "Description" onChange = {handleAddFormChange}/>
                <input type ="text" name = "amount" required="required" placeholder = "Amount" onChange = {handleAddFormChange}/>
                <input type ="text" name = "created_at" required="required" placeholder = "Created on" onChange = {handleAddFormChange}/>
                <input type ="text" name = "created_by" required="required" placeholder = "Created by" onChange = {handleAddFormChange}/>
                <input type ="text" name = "updated_at" required="required" placeholder = "Updated on" onChange = {handleAddFormChange}/>
                <input type ="text" name = "updated_by" required="required" placeholder = "Updated by" onChange = {handleAddFormChange}/>
                <button type = "submit">Add Transaction</button>
        </form>
        </div>
    )
}

export default ExpenseView

