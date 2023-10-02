import mangoose from "mangoose";

const userSchema = new mangoose.Schema({
 username :{
  type: String,
  required: [true, "Please provide a username"],
  unique: true,
 },
 email :{
  type: String,
  required: [true, "Please provide a email"],
  unique: true,
},

passwords :{
  type: String,
  required: [true, "Please provide a password"]
},

isVerified :{
  type: Boolean,
  default: false,
},

isAdmin :{
  type: Boolean,
  default: false,
},

forgotPasswordToken: String,
forgotPasswordTokenExpiry: Date,
verifyToken: String,
verifyTokenExpiry: Date,

})

const User = mangoose.models.users || mangoose.model ("users", userSchema);

export default User;