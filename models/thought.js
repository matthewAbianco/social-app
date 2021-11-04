const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema({
    reactionId: {

    },
    reactionBody: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: dateFormat,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
})

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        Required: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: dateFormat,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)

    },
    username: {
        type: String,
        required: true
    },
    reaction: [reactionSchema]

})