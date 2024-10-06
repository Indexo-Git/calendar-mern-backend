const { Schema, model } = require('mongoose');

const EventSchema = Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        required: [true, 'Start date is required']
    },
    end: {
        type: Date,
        required: [true, 'End date is required']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    }
});

module.exports = model('Event', EventSchema);