const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes for 10 pages
app.get('/', (req, res) => res.render('home', { title: 'Home' }));
app.get('/about', (req, res) => res.render('about', { title: 'About Toronto' }));
app.get('/attractions', (req, res) => res.render('attractions', { title: 'Top Attractions' }));
app.get('/food', (req, res) => res.render('food', { title: 'Best Food Spots' }));
app.get('/events', (req, res) => res.render('events', { title: 'Upcoming Events' }));
app.get('/contact', (req, res) => res.render('contact', { title: 'Contact Us' }));
app.get('/history', (req, res) => res.render('history', { title: 'Toronto’s History' }));
app.get('/nightlife', (req, res) => res.render('nightlife', { title: 'Nightlife & Entertainment' }));
app.get('/parks', (req, res) => res.render('parks', { title: 'Parks & Nature' }));
app.get('/shopping', (req, res) => res.render('shopping', { title: 'Shopping & Malls' }));
app.get('/transit', (req, res) => res.render('transit', { title: 'Public Transit Info' }));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
