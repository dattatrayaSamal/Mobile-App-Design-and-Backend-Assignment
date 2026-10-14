import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    courseInterest: {
      type: String,
      required: true,
      trim: true,
    },
    claimedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      default: null,
    },
    claimedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

enquirySchema.index({ claimedBy: 1, createdAt: -1 });

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;
