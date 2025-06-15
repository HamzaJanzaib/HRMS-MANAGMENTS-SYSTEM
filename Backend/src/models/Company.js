import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    CompanyName: {
        type: String,
        required: true,
        trim: true
    },
    CompanyLogo: {
        type: String,
        trim: true
    },
    Address: {
        type: String,
        required: true,
        trim: true
    },
    Designation: {
        type: String,
        trim: true
    },
    Branches: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch'
    }],
    Departments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    }],
    Employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }],
    ContactDetails: {
        phone: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        }
    },
    CompanyAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
} , { timestamps: true });

const Company = mongoose.model('Company', CompanySchema);

export default Company;