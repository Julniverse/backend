const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/chats', chatRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});