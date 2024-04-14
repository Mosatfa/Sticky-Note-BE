import mongoose, { Schema, Types, model } from "mongoose";

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
    },
    color: {
        type:String,
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    listId: {
        type: Types.ObjectId,
        ref: 'List',
        required: true
    }
}, {
    timestamps: true
})

const noteModel = mongoose.models.Note || model('Note', noteSchema)

export default noteModel