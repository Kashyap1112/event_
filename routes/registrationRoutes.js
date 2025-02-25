const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/emailSender');

router.post('/', async (req, res) => {
    try {
        const { email, eventTitle } = req.body;
        await sendEmail(email, "Event Registration", `You have registered for ${eventTitle}`);
        res.json({ success: true, message: "Email Sent!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
