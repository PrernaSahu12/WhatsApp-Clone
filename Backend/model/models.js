const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")



const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String }, 
  status: { type: String, default: "Hey there! I am using WhatsApp clone." }, 
  online: { type: Boolean, default: false },
  lastSeen: { type: Date },
}, { timestamps: true });


// Password hasing before saving

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return(next);
    const salt = await bcrypt.genSalt(10);
    this.password = await  bcrypt.hash(this.password, salt)
    next();
});

userSchema.method.matchPassword = async function(enterPassword){
    return await  bcrypt.compare(enterPassword, this.password)

}
module.exports = mongoose.model("User", userSchema)