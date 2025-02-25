const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: { type: String, enum: ["admin", "organizer", "attendee"], default: "attendee" }
});

module.exports = mongoose.model("User", UserSchema);
