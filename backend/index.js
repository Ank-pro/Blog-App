const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const blogRoutes = require('./route/blogRoutes')

dotenv.config();
const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'https://your-frontend-vercel-url.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization']
}));
app.use(express.json());

mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log('Error connecting to DB', err));

app.use('/api/blogs',blogRoutes);

//testing
// app.get('/test', async (req, res) => {
//     try {
//         const text = await run(`Give me summary not more than 75 words on ${title}`);
//         res.status(200).json(text)
//     }
//     catch(err){
//         res.status(500).json({error : 'Internal server err'})
//     }
// })

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server is running on ', PORT)
})