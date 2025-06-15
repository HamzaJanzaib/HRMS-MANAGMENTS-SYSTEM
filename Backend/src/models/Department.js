import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
    DepartmentName: {
        type: String,
        required: true,
        trim: true
    },
    Description: {
        type: String,
        trim: true
    },
    Branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
        required: true
    },
    Company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    HR: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
    },
    Employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }],
    SalaryBudget: {
        type: Number,
        required: false,
        default: 0
    }
}, { timestamps: true });

const Department = mongoose.model('Department', DepartmentSchema);

export default Department;
