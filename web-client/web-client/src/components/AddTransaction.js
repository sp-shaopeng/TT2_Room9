import React from 'react'

const AddTransaction = () => {
    return (
        <div>
            <h2>Add Transaction</h2>
            <form>
                <input type ="text" name = "project_id" required="required" placeholder = "Project ID"/>
                <input type ="text" name = "category_id" required="required" placeholder = "Category ID"/>
                <input type ="text" name = "name" required="required" placeholder = "Transaction Name"/>
                <input type ="text" name = "description" required="required" placeholder = "Description"/>
                <input type ="text" name = "amount" required="required" placeholder = "Amount"/>
                <input type ="text" name = "created_at" required="required" placeholder = "Created on"/>
                <input type ="text" name = "created_by" required="required" placeholder = "Created by"/>
                <input type ="text" name = "updated_at" required="required" placeholder = "Updated on"/>
                <input type ="text" name = "updated_by" required="required" placeholder = "Updated by"/>
                <button type = "submit">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
