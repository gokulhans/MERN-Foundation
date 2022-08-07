
const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Setting Up routes 

const routes = require('./routes/api/books');


// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api', routes);



const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));