import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
        },
        refreshToken: {
            type: String
        }
    },
    {timestamps: true}
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            fullname: this.fullname,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);
