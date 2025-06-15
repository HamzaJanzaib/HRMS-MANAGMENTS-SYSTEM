import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema(
    {
        UserName: {
            FirstName: { type: String },
            LastName: { type: String }
        },
        Email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        Password: {
            type: String,
            required: true,
        },
        Address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address',
        },
        ProfilePicture: {
            type: String,
            default: 'https://avatar.iran.liara.run/public/boy',
        },
        ContactNumber: Number,
        Role: {
            type: String,
            enum: [
                'Admin',
                'HR Manager',
                'Employee'
            ],
            default: 'Employee',
        },
        DOB: {
            type: Date,
            required: true
        },
        Gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: true
        },
        Status: {
            type: String,
            enum: ['Active', 'Inactive', 'Suspended'],
            default: 'Active'
        },
        Leaves: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Leave'
            }
        ],
        Attendance: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Attendance'
            }
        ],
        Department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Department',
        },
        Company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company',
        },
        IsBlocked: {
            type: Boolean,
            default: false
        },
        IsLead: {
            type: Boolean,
            default: false
        }
    },
    { minimize: false, timestamps: true }
);

const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;
