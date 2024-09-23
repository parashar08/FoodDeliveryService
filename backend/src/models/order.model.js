import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        restaurant: {
            type: Schema.Types.ObjectId,
            ref: "Restaurant",
            required: true
        },
        items: [{
            menuItem: {
                type: Schema.Types.ObjectId,
                ref: "MenuItem"
            },
            quantity: {
                type: Number,
                default: 0
            }
        }],
        totalAmount: {
            type: Number,
            default: 0
        },
        status: {
            type: String,
            enum:["pending", "confirmed", "cancelled", "delivered"],
            default: "pending",
        },
        deliveryAddress: {
            street: {type: String},
            city: {type: String},
            state: {type: String},
            country: {type: String},
            longitude: {type: String},
            latitude: {type: String},
            landmark: {type: String}
        },
        deliveryPerson: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {timestamps: true}
)

export const Order = mongoose.model("Order", orderSchema);