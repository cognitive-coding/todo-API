const express = require('express');
const app = express();

var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Todo API Root");
});

app.listen(PORT, () => {
    console.log('\n###############################################');
    console.log('\n$$ Express Server is Running on Port ' + PORT + ' $$');
    console.log('\n#############################################');
});