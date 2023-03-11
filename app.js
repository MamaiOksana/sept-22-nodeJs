const express = require('express');
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/users', (req, res)=>{
res.json(users);
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;

    const user = users[+userId];

    res.json(user);
})

app.post('/users', (req, res)=>{
    const body = req.body;
    users.push(body);
    res.json( {
        message: 'User created!'
    })
})

app.put('/users/:userId', (req, res)=>{
    const {userId} = req.params;
    const updatedUser = req.body;

    users[+userId] = updatedUser;

    res.status(200).json({
        message: 'User updated',
        data: users[+userId]
    })
})

app.delete('/users/:userId', (req, res)=>{
    const {userId} = req.params;

    users.splice(+userId, 1);
    res.status(200).json({
        message: 'User deleted',
    })
})

app.get('/welcome', (req, res)=>{
    console.log('WELCOME');
    res.send('WELCOME');
    res.end();
});

const PORT = 5100;

app.listen(PORT, ()=>{
    console.log(`Server has started on PORT ${PORT} `);
});

