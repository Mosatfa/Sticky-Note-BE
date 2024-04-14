import mongoose, { Schema, Types, model } from "mongoose";

const listSchema = new Schema({
    listName: {
        type: String,
        required: true,
        trim: true
    },
    color: String,
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

const listModel = mongoose.models.List || model('List', listSchema)

export default listModel