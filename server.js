const express = require('./node_modules/express');
const appRoutes = require('./router/appRoutes.js');
const app = express();

// Allows our application to serve static files from the public directory
// to each of our different routes '/', '/allGifs', '/randomGifs'.

app.use('/', appRoutes);
app.use('/allGifs', appRoutes);
app.use('/randomGifs', appRoutes);

// Our application's port is set to 3000.
const port = process.env.PORT || 3000

// Confirmation that our live server is active on port 3000.
app.listen(port, function () {
    console.log(`Full Stack - JavaScript listening on port ${port}!`)
})