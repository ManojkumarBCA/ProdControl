const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: "user",
      required: true,
    },
    items: [
      {
        productId: {
          type: ObjectId,
          ref: "product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
        _id: 0,
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      // Holds total price of all the items in the cart
    },
    totalItems: {
      type: Number,
      required: true,
      // Holds total number of items in the cart
    },
    totalQuantity: {
      type: Number,
      required: true,
      // Holds total number of quantity in the cart
    },
    cancellable: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "completed", "canceled"],
    },
    deletedAt: {
      type: Date,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
