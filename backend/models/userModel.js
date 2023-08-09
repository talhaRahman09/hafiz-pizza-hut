import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: [true, 'Email already exists'],
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      // Corrected property name
      type: String, // Corrected typo: "types" to "type"
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    phone: {
      type: String,
      maxlength: [
        11,
        'Phone number must be less than or equal to 11 characters',
      ],
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('users', userSchema);
