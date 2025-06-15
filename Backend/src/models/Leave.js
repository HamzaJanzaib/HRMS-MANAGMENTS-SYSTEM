import mongoose from "mongoose";

const LeaveSchema = new mongoose.Schema({
    Employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    Company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    Branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Branch",
    },
    LeaveType: {
        type: String,
        enum: ["Sick", "Casual", "Paid", "Unpaid", "Maternity", "Other"],
        required: true,
    },
    FromDate: {
        type: Date,
        required: true,
    },
    ToDate: {
        type: Date,
        required: true,
    },
    TotalDays: {
        type: Number,
        required: true,
    },
    Reason: {
        type: String,
        required: true,
        trim: true,
    },
    Status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected", "Cancelled"],
        default: "Pending",
    },
    AppliedAt: {
        type: Date,
        default: Date.now,
    },
    ReviewedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee", 
    },
    ReviewRemarks: {
        type: String,
        trim: true,
    }
}, { timestamps: true });

const Leave = mongoose.model("Leave", LeaveSchema);

export default Leave;
