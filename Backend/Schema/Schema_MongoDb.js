import mongoose from "mongoose";

// const Transactions_Schema = new mongoose.Schema(
//   {
//     id_user: {
//       type: ID,
//       required: true,
//       min: 2,
//       max: 100,
//     },
//     date: {
//       type: Date,
//       required: true,
//     },
//     value: {
//       type: Number,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

const Like_Content = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    id_content: [String],
  },
  { timestamps: true }
);

const Dislike_Content = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    id_content: [String],
  },
  { timestamps: true }
);

const ListSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    name: String,
    list_val: {
      type: [String],
    },
  },
  { timestamps: true }
);

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    id_user: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    subscription: Boolean,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
const List = mongoose.model("List", ListSchema);
const Dislike = mongoose.model("Dislike", Dislike_Content);
const Like = mongoose.model("Like", Like_Content);
// const Transactions = mongoose.model("Transactions", Transactions_Schema);

export { User, List, Dislike, Like };
