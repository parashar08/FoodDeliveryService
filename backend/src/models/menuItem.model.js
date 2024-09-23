import mongoose, { Schema } from "mongoose";

const menuItemSchema = new Schema(
    {
        menuName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        restaurant: {
            type: Schema.Types.ObjectId,
            ref: "Restaurant",
            required: true
        }
    },
    {timestamps: true}
)

export const MenuItem = mongoose.model("MenuItem", menuItemSchema);