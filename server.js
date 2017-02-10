const express = require('express');
const path = require('path');
const compression = require('compression');
const patriots = require('./routes/patriots');
const falcons = require('./routes/falcons');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/patriots', patriots);
app.use('/falcons', falcons);

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'hbs');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(PORT, (req, res) => console.log(`Server running at port: ${PORT}`))
