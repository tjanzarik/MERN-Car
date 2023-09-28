const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema(
    {
        username: { type: String, required: [true, 'username is required!']},
        email: { type: String, required: [true, 'email is required!']},
        password: { type: String, minLength: [8, 'Password must be 8 characters or more!']}

    },
    {
        timestamps: true,
    },
);

userSchema
.virtual("confirmPassword")
.get(() => this._confirmPassword)
.set(value=>this._confirmPassword = value)

userSchema.pre("validate",function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword',"Password need to match!")
    }
    next();
});

userSchema.pre('save', async function(next) {
   try {
    const hashedPassword = await bcrypt.hash(this.password, 6);
    console.log("PASSWORD",this.password,"HASHED",hashedPassword)
    this.password = hashedPassword;
   } catch (error) {
    console.log("HASHING ERROR!", error);
   }
   
    next();
});

const model = mongoose.model('User', userSchema);
module.exports = model;