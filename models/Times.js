const mongoose = require('mongoose');


const TimesSchema = new mongoose.Schema({
    datevalue: {
        type: String,
        required: true,
    },
    gameCount: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

const Times = mongoose.model('Times', TimesSchema);
module.exports = Times;


// export default mongoose.model('User', UserSchema);