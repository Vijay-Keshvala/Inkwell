const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config() 
const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/bookRoutes')
const protectedRoutes = require('./routes/protectedRoutes')

const app = express()

// Connect to Mongodb //
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Database Connected successfully"))
.catch((err)=> console.log("Error connecting datbase",err));


// Middleware //

app.use(cors())
app.use(express.json()) // for passing JSON bodies

// Start Server //
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`);})


// Routes // 
app.use('/api/user', userRoutes);
app.use('/api', protectedRoutes);
app.use('/api/books',bookRoutes)
app.get('/test', (req, res) => {
    res.send('Server is up');
  });
  