const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema({

    // 
    username: {
        type: String,
        Unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique:true,
        required: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false
}
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});