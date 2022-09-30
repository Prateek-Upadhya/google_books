const express = require('express');
const app = express();
const axios = require('axios');
const PORT  = 8080;

app.use(express.json());

app.get('/bookdetails/:isbn', (req,res) =>{
    
    const {isbn}  = req.params;
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
    .then(response => {
        res.status(200).send(response.data);
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    })
});

app.listen(PORT, () => {
    console.log(`its alive at http://localhost:${PORT}`);
});