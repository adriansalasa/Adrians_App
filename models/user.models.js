const mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
    {
        user_name: {
          type: String,
          required: true
        },
        account_number: {
            type: Number,
            required: true
        },
        identity_number: {
            type: Number,
            required: true
        },
    },
      { timestamps: true }
    );

var User = mongoose.model("users", userSchema);
module.exports = User;