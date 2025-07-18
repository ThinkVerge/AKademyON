const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/trimite-pdf', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email lipsă' });

  // Folosește variabile de mediu pentru email și parolă!
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  try {
    await transporter.sendMail({
      from: `Ghid Gratuit <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Ghidul tău gratuit',
      text: 'Salut! Găsești atașat ghidul PDF promis. Spor la studiu!',
      attachments: [
        {
          filename: 'ghid-gratuit.pdf',
          path: path.join(__dirname, 'pdf', 'ghidgratuitnewww.pdf')
        }
      ]
    });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Eroare la trimitere email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Serverul rulează pe portul', PORT));


