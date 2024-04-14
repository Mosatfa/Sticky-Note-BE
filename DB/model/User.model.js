import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    isVerifide: {
        type: Boolean,
        default: false
    },
    provider: {
        type: String,
        default: 'SYSTEM',
        enum: ['SYSTEM', 'GOOGLE']
    },
}, {
    timestamps: true
})

const userModel = mongoose.models.User || model('User', userSchema)

export default userModel