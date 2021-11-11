import React, {useState} from "react";
import "./Table.css"
import data from "../data/expense.json"

const Table = () => {
    const[transactions,settransactions] = useState(data);

    return (
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
    )
}

export default Table
