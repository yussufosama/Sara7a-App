import mongoose from "mongoose";
import { GenderEnum, RoleEnum, providerEnum } from "../../common/enums/index.js";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true, minlength: 3, maxlength: 50 },
  password: { type: String, required: true, minlength: 6, maxlength: 1024, select: false },
  age: { type: Number, required: true },
  gender: { type: Number, required: true, enum: Object.values(GenderEnum), default: GenderEnum.Male },
  role: { type: Number, required: true, enum: Object.values(RoleEnum), default: RoleEnum.user },
  provider: { type: Number, required: true, enum: Object.values(providerEnum), default: providerEnum.email },
  profileImage: { type: String },
  CoverImage: { type: String },
  isVerified: { type: Boolean, default: false },
}, { timestamps: true });

export const UserModel = mongoose.model("user", userSchema);
