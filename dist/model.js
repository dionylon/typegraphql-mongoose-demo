"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
const user_type_1 = require("./user-type");
const UserModel = typegoose_1.getModelForClass(user_type_1.User);
exports.UserModel = UserModel;
