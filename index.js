

const  express  = require('express');
const path = require('path');
const  app  =  express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



app.use(express.static(path.join(__dirname, '/front')));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

mongoose.connect('mongodb://localhost:27017/blg440fall2024', {
    
});

app.use('/', indexRouteController);
app.use('/signup', signupRouteController);
app.use('/signin', signinRouterController);



/* app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/signup', (req, res) => {
    
}); */