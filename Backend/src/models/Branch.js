import mongoose from "mongoose";

const BranchSchema = new mongoose.Schema({
    BranchName: {
        type: String,
        required: true,
        trim: true,
    },
    Address: {
        type: String,
        required: true,
        trim: true,
    },
    ContactDetails: {
        phone: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
    },
    BranchAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    Company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    Employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
    }],
}, { timestamps: true });

const Branch = mongoose.model('Branch', BranchSchema);

export default Branch;
