import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        address: {
            street: {type: String},
            city: {type: String},
            state: {type: String},
            country: {type: String},
            postalCode: {type: String},
            latitude: {type: String},
            longitude: {type: String},
            landmark: {type: String}
        },
        role: {
            type: String,
            enum: ["customer", "restaurant", "delivery"],
            default: "customer"
        }
    },
    {timestamps: true}
)

export const User = mongoose.model("User", userSchema);