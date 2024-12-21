const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const run = require('./gen-ai/genAi');
const blogRoutes = require('./route/blogRoutes')

const title = 'Sports'
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log('Error connecting to DB', err));

app.use('/api/blogs',blogRoutes);

//test
app.get('/test', async (req, res) => {
    try {
        const text = await run(`Give me summary not more than 75 words on ${title}`);
        res.status(200).json(text)
    }
    catch(err){
        res.status(500).json({error : 'Internal server err'})
    }
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server is running on ', PORT)
})