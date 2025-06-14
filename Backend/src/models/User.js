import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: 'https://avatar.iran.liara.run/public/boy',
    },
    role: {
      type: String,
      enum: ['Owner', 'user'],
      default: 'user',
    },
  },
  { minimize: false, timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User