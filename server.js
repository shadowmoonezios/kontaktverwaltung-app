const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/kontakte', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Datenbank verbunden!'))
  .catch(err => console.error('Datenbank-Fehler:', err));

app.get('/api/contacts', (req, res) => {
  res.send('Hier kommen die Kontakte!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});