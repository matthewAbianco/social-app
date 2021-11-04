const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
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
},
{
    toJSON:{
        getters: true
    }
}
)

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        Required: true,
        maxlength: 280
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
},
{
    toJSON: {
        getters: true
    }
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reaction.length;
})
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;