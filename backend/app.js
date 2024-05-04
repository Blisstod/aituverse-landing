require('dotenv').config();
const express = require('express')
const router = require('./src/api/routes/index')

const app = express();
const PORT = process.env.PORT || 8888;

app.use('/', router);

app.get('/', (req, res) => {
    res.redirect('/en')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});