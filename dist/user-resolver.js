"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const user_type_1 = require("./user-type");
const model_1 = require("./model");
// create a resolver of User class, using typegoose fetch data from db
let UserResolver = class UserResolver {
    user(name) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield model_1.UserModel.findOne({ name: name }).exec();
            return (_a = user) === null || _a === void 0 ? void 0 : _a.toJSON();
        });
    }
    addUser(name, intro) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield model_1.UserModel.create({ name: name, intro: intro });
            return (_a = user) === null || _a === void 0 ? void 0 : _a.toJSON();
        });
    }
    deleteUser(name) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield model_1.UserModel.findOneAndDelete({ name: name });
            return (_a = user) === null || _a === void 0 ? void 0 : _a.toJSON();
        });
    }
};
__decorate([
    type_graphql_1.Query(() => user_type_1.User, { nullable: true }),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    type_graphql_1.Mutation(() => user_type_1.User, { nullable: true }),
    __param(0, type_graphql_1.Arg("name")),
    __param(1, type_graphql_1.Arg("intro", { nullable: true, defaultValue: "这家伙很懒，还没有简介~" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "addUser", null);
__decorate([
    type_graphql_1.Mutation(() => user_type_1.User, { nullable: true }),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
UserResolver = __decorate([
    type_graphql_1.Resolver(() => user_type_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
