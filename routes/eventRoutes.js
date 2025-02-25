const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.post('/create', async (req, res) => {
    try {
        const { title, description, date, organizer } = req.body;
        const newEvent = new Event({ title, description, date, organizer });
        await newEvent.save();
        res.json({ success: true, event: newEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
