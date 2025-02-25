const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, enum: ["registered", "attended"], default: "registered" }
});

module.exports = mongoose.model("Registration", RegistrationSchema);
