import {
  Resolver,
  Query,
  Arg,
  Mutation,
} from "type-graphql";
import { User } from './user-type';
import { UserModel } from "./model";

// create a resolver of User class, using typegoose fetch data from db
@Resolver(() => User)
export class UserResolver{
  @Query(() => User, { nullable: true })
  async user(@Arg("name") name:  string): Promise<User> {
    const user = await UserModel.findOne({name: name}).exec();
    return user?.toJSON();
  }
  @Mutation(() => User, { nullable: true })
  async addUser(@Arg("name")name: string,
                @Arg("intro",{nullable: true, defaultValue: "这家伙很懒，还没有简介~"})intro: string): Promise<User> {
    const user = await UserModel.create({name: name,intro: intro});
    return user?.toJSON();
  }
  @Mutation(() => User, { nullable: true })
  async deleteUser(@Arg("name")name: string): Promise<User> {
    const user = await UserModel.findOneAndDelete({name: name});
    return user?.toJSON();
  }
}