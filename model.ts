import { getModelForClass } from "@typegoose/typegoose";
import { User } from "./user-type";

const UserModel = getModelForClass(User);

export { UserModel };