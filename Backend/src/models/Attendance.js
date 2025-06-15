import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
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
    Date: {
        type: Date,
        required: true,
    },
    Status: {
        type: String,
        enum: ["Present", "Absent", "Late", "Half Day", "Leave"],
        required: true,
    },
    CheckInTime: {
        type: Date,
    },
    CheckOutTime: {
        type: Date,
    },
    WorkingHours: {
        type: Number,
    },
    Notes: {
        type: String,
        trim: true,
    }
}, { timestamps: true });

AttendanceSchema.index({ employee: 1, date: 1 }, { unique: true });

const Attendance = mongoose.model("Attendance", AttendanceSchema);

export default Attendance;
