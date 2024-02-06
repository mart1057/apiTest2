const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
global.Task = require('./api/models/taskModel')
const routes = require('./api/routes/taskRoutes')

mongoose.connect(
    'mongodb://127.0.0.1/vuecrudapp',
    {useNewUrlParser: true},
)
const port  = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req,res)=>{
    res.status(404).send({url:'notfound'})
})

console.log('start server');
