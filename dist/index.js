"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const path = __importStar(require("path"));
const type_graphql_1 = require("type-graphql");
const user_resolver_1 = require("./user-resolver");
const mongoose_1 = __importDefault(require("mongoose"));
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        // connect to mongodb 
        yield mongoose_1.default.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "test" });
        // build TypeGraphQL executable schema
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [user_resolver_1.UserResolver],
            // automatically create `schema.gql` file with schema definition in current folder
            emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        });
        // Create GraphQL server
        const server = new apollo_server_1.ApolloServer({
            schema,
            // enable GraphQL Playground
            playground: true,
        });
        // Start the server
        const { url } = yield server.listen(4000);
        console.log(`Server is running, GraphQL Playground available at ${url}`);
    });
}
bootstrap();
