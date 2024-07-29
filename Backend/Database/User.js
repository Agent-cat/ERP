const mongoose = require("mongoose");
mongoose
  .connect(
    ""
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    
  },
  Password: {
    type: String,
    required: true,
  },
});
const db = mongoose.model("Users", UserSchema);
module.exports = {
  db,
};


