const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());


app.post('/event',(req,res) => {

});

app.listen(4003, () => {
    console.log('Listening on 4003')
})
