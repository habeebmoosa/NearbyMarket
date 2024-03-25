import express from 'express';

const app = express();

app.get('/test', (req, res)=> res.send('Nearby Market Backend is running...'));

app.listen(3000, ()=> console.log('Server is running on port 3000'));