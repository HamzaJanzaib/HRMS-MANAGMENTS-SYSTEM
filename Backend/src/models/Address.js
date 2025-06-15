import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
    {
        UserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
            required: true,
        },
        Address: {
            type: String,
            required: true,
            trim: true,
        },
        City: {
            type: String,
            required: true,
            trim: true,
        },
        State: {
            type: String,
            required: true,
            trim: true,
        },
        PostalCode: {
            type: String,
            required: true,
            trim: true,
        },
        Country: {
            type: String,
            required: true,
            trim: true,
        }
    },
    { timestamps: true }
);

const Address = mongoose.model("Address", AddressSchema);

export default Address;
