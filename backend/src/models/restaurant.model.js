import mongoose, { Schema } from "mongoose";

const restaurantSchema = new Schema(
    {
        res_name: {
            type: String,
            required: true
        },
        description: {
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
        cuisine: [{ type: String }],
        rating: {
            type: Number,
            default: 0
        },
        isOpen: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {timestamps: true}
)

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);