const express = require('express');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(require('./routes/htmlRoutes.js'));
app.use(require('./routes/apiRoutes'));



app.listen(PORT, function(){
    console.log(`app is listening on, ${PORT}`)
})