require('dotenv').config()

const express = require("express")
const app = express()
const cors = require('cors')
const pool = require('./db')
const jwt = require('jsonwebtoken')

app.use(cors())

app.use(express.json())


app.post('/signup', async (req, res) => {
    try {
        const {username, password, name, appointment} = req.body
        const newUser = await pool.query("INSERT INTO users (username, password, name, appointment) VALUES($1, $2, $3, $4)", [username, password, name, appointment]);
        res.sendStatus(200)
    } catch (err) {
        console.log(err.message)
        res.sendStatus(400)
    }

}) 
    


app.post('/login', async (req, res) => {
    try {
        //MAKE USE OF require('crypto').randomBytes(64).toString('hex') TO SET UP KEY IN .ENV FILE

        const {username, password} = req.body

        const uid = await pool.query("SELECT * FROM users u WHERE u.username=$1 and u.password=$2", [username, password]);
        if(uid.rows.length != 1) {
            return res.sendStatus(401)
        }

        const user = { name: uid.rows[0]["name"], id: uid.rows[0]["id"]}

        const accessToken = generateAccessToken(user)
        res.json({ accessToken: accessToken})
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
    if(token == null) {
        return res.sendStatus(401)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })

}

//Get all projects
app.post("/projects", authenticateToken, async (req, res) => {
    try {
        const projects = await pool.query("SELECT * FROM project");
        res.json(projects.rows);
    } catch (err) {
        console.error(err.message)
        res.sendStatus(400)

    }
})



// Get the list of expense based on the database
app.post("/expenses", authenticateToken, async (req, res) => {
    try {
        const {project_id} = req.body;
        const expenses = await pool.query("SELECT * FROM expense e where e.project_id = $1", [project_id]);
        res.json(expenses.rows);
    } catch (err) {
        console.error(err.message)
        return res.sendStatus(400)

    }
})

// Add an expense
app.post("/addExpense", authenticateToken, async (req, res) => {
    try {
        const {project_id, category_id, name, description, amount} = req.body;
        const t = new Date();
        const v = await pool.query("INSERT INTO Expense (project_id, category_id, name, description, amount, created_at, created_by, updated_at, updated_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [project_id, category_id, name, description, amount, t.toISOString(), req.user.name, t.toISOString(), req.user.name]);
        res.sendStatus(200);
    } catch (err) {
        console.error(err.message);
        res.sendStatus(400);
        
    }
})

// Update an expense 
app.post("/editExpense", authenticateToken, async (req, res) => {
    try {
        const {id, project_id, category_id, name, description, amount} = req.body;
        const t = new Date();

        const v = await pool.query("UPDATE Expense e SET project_id = $1, category_id = $2, name = $3, description = $4, amount = $5, updated_at = $6, updated_by = $7 WHERE e.id = $8",  [project_id, category_id, name, description, amount, t.toISOString(), req.user.name, id]);
        res.sendStatus(200);
    } catch (err) {
        console.error(err.message)
        res.sendStatus(400)

    }
})

// Delete an expense
app.delete("/deleteExpense", authenticateToken, async (req, res) => {
    try {
        const {expense_id} = req.body;
        const v = await pool.query("DELETE FROM Expense e WHERE e.id = $1",  [expense_id]);
        res.sendStatus(200);
    } catch (err) {
        console.error(err.message)
        res.sendStatus(400)

    }
})





// Get the budget wrt the project
app.post("/getBudget", authenticateToken, async (req, res) => {
    try {
        const {project_id} = req.body;
        const budget = await pool.query("SELECT p.budget FROM project p where p.id = $1", [project_id]);
        if(budget.rows[0] == null) {
            throw new Error('No such project');
        }
        res.json(budget.rows[0]);
    } catch (err) {
        console.error(err.message)
        res.sendStatus(400)
    }
})


// edit budget wrt the project
app.post("/editBudget", authenticateToken, async (req, res) => {
    try {
        const {project_id, budget} = req.body;
        const v = await pool.query("UPDATE project SET budget = $1 where id = $2", [budget, project_id]);
        res.json(200);
    } catch (err) {
        console.error(err.message)
        res.sendStatus(400)
    }
})


// add new project, the owner will add the project
app.post("/addProject", authenticateToken, async (req, res) => {
    try {
        const {name, budget, description} = req.body;
        const v = await pool.query("INSERT INTO project (user_id, name, budget, description) VALUES($1, $2, $3, $4)", [req.user.id, name, budget, description]);
        res.json(200);
    } catch (err) {
        console.error(err.message)
        res.sendStatus(400)
    }
})


// edit project info 
app.post("/editProject", authenticateToken, async (req, res) => {
    try {
        const {name, budget, description, project_id} = req.body;
        const v = await pool.query("UPDATE project SET name = $1, budget = $2, description = $3 WHERE id = $4", [name, budget, description, project_id]);
        res.json(200);
    } catch (err) {
        console.error(err.message)
        res.sendStatus(400)
    }
})


//delete project
app.delete("/deleteProject", authenticateToken, async (req, res) => {
    try {
        const {project_id} = req.body;
        const v = await pool.query("DELETE FROM Project WHERE id = $1",  [project_id]);
        res.json(200)
    } catch (err) {
        console.error(err.message)
        res.sendStatus(400)
    }
})





app.listen(8080, () => {
    console.log("Server started")
})
