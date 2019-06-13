const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://semanaomnistack:XXX@cluster0-uuxjm.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
});

app.get('/', (req, res) => {
    return res.send(`Hello ${req.query.name}`);
});
app.listen(3333);