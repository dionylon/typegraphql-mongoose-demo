import { ObjectType, Field } from 'type-graphql';
import { prop } from '@typegoose/typegoose';

// typegoose & type-graphql class decorator
@ObjectType({description: "simple user"})
export class User {
  @prop()
  @Field()
  name?:string

  @prop()
  @Field({nullable: true})
  intro?:string
  
}