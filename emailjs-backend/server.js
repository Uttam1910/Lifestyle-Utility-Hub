require('dotenv').config();
const express = require('express');
const cors = require('cors');
const emailjs = require('emailjs-com');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: 'https://your-frontend-domain.com' })); // Restrict CORS to your frontend
app.use(express.json());

// Initialize EmailJS with .env credentials
emailjs.init(process.env.EMAILJS_USER_ID);

// Email endpoint
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Send email via EmailJS
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { name, email, message }
    );

    res.status(200).json({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error('Email failed:', error);
    res.status(500).json({ success: false, message: 'Email failed to send' });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});