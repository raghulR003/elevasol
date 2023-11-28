import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    WorkerID: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    Position: {
      type: String,
      required: true,
      min: 5,
    },
    InsuranceID: String,
    Country: String,
    Insurance: Array,
    Age: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("worker_details", UserSchema);
export default User;