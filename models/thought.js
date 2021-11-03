const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


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

    }

})