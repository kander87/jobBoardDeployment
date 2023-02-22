const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters!"]
    },
    company: { type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters!"] 
    },
    salary: {type: Number,
        required: [true, "{PATH} is required"],
        min: [70000, "{PATH} must be at least {MIN}!"]
    }, 
    remote: {type: Boolean, 
        default: false
    }
}, { timestamps: true });
const Job = mongoose.model("Job", JobSchema);
module.exports = Job