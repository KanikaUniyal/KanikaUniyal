const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose a port number

app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://kanikauniyal10:uTWKeLigfc0UlxLa@cluster0.4ybk4xe.mongodb.net/contacts', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Define a route to handle form submissions
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  
  // Create a new contact entry
  const newContact = new Contact({ name, email, message });

  // Save the entry to the database
  newContact.save((err) => {
    if (err) {
      console.error('Error saving contact:', err);
      res.status(500).send('Error saving contact');
    } else {
      res.send('Contact saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
