const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
//   lastLogIn: {type: Date}
});

// Define schema methods for password encryption
userSchema.methods = {
    checkPassword: function (inputPassword) {
      return bcrypt.compareSync(inputPassword, this.password)
    },
      hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
      }
  }

// Define pre-hooks for the save method for hashed passwords
userSchema.pre('save', function (next) {
    if (!this.password) {
      console.log('models/user.js =======NO PASSWORD PROVIDED=======');
  
      next()
    } else {
      console.log('models/user.js hashPassword in pre save');
  
      this.password = this.hashPassword(this.password)
      next()
    }
  })
  
 
  const User = mongoose.model("User", userSchema);
  module.exports = User;
  