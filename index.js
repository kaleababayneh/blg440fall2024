const  express  = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const  app  =  express();

const indexRouteController = require('./routes/indexRouteController');
const signupRouteController = require('./routes/signupRouteController');
const signinRouterController = require('./routes/signinRouteController');
const profileRouteController = require('./routes/profileRouteController');
const otpRoutes = require('./routes/otpRoutes');

app.use(express.static(path.join(__dirname, '/front')));

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', indexRouteController);
app.use('/signup', signupRouteController);
app.use('/signin', signinRouterController);
app.use('/profile', profileRouteController);
app.use('/api', otpRoutes);


app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  console.log('Request Method:', req.method);
  next();
});

app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  
  // Ensure response hasn't been sent
  if (!res.headersSent) {
      res.status(500).sendFile(path.join(__dirname, 'front', 'error.html'));
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

mongoose.connect('mongodb://localhost:27017/blg440fall2024', {
  
});