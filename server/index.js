const express = require('express')
const app = express();

app.get('/', () => {
    console.log('initial route......');
})

app.listen(3000, ()=>{
    console.log('server started..');
})