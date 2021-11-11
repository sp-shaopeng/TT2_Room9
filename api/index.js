const express = require("express")
const app = express()
const cors = require('cors')
const pool = require('./db')
const jwt = require('jsonwebtoken')
const { values } = require("lodash")



app.post('/signup', async (req, res) => {
    try {
        const {username, password, name, appointment} = req.body
        const newUser = await pool.query("INSERT INTO users (username, password, name, appointment) VALUES($1, $2, $3, $4)", [username, password, name, appointment]);
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(400)
        console.log(err.message)
    }

}) 



app.post('/login', async (req, res) => {
    try {
        //MAKE USE OF require('crypto').randomBytes(64).toString('hex') TO SET UP KEY IN .ENV FILE

        const {username, password} = req.body
        const uid = await pool.query("SELECT id FROM users WHERE username=$1 and password=$2", [username, password]);
        if(uid.rows.length != 1) {
            return res.sendStatus(401)
        }
        const user = { name: uid.rows["name"], id: uid.rows[0]["id"]}

        const accessToken = generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
        res.json({ accessToken: accessToken, refreshToken: refreshToken})
    } catch (err) {
        console.log(err.message)
        res.send(401)
    }



})


function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '3600s'})
}


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader
    console.log(authHeader)
    console.log(token)
    if(token == null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        }
        console.log(user)
        req.user = user
        next()
    })

}


// Get the list of expense based on the database
app.post("/expenses", authenticateToken, async (req, res) => {
    try {
        const newTodo = await pool.query("SELECT * FROM expense");
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// Add an expense
app.post("/addExpense", authenticateToken, async (req, res) => {
    try {
        const {project_id, category_id, name, description, amount} = req.body;
        const t = new Date();
        const newTodo = await pool.query("INSERT INTO Expense (project_id, category_id, name, description, amount, created_at, created_by, updated_at, updated_by) VALEUS($1, $2, $3, $4, $5, $6, $7, $8, $9)", [project_id, category_id, name, description, amount, t.toISOString(), req.user.name, t.toISOString(), req.user.name]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// Update an expense for a user
app.delete("/editExpense", authenticateToken, async (req, res) => {
    try {
        const {id, project_id, category_id, name, description, amount} = req.body;
        const newTodo = await pool.query("UPDATE Expense e SET project_id = $1, category_id = $2, name = $3, description = $4, amount = $5, updated_at = $6, updated_by = $7 WHERE e.id = id",  [project_id, category_id, name, description, amount, t.toISOString(), req.user.name]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// Update an expense for a user
app.delete("/deleteExpense", authenticateToken, async (req, res) => {
    try {
        const {id} = req.body;
        const newTodo = await pool.query("DELETE Expense e WHERE e.id = id",  [project_id]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})






app.listen(8080, () => {
    console.log("Server started")
})
