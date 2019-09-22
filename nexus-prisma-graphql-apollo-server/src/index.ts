import { ApolloServer, gql } from "apollo-server";
import { idArg, queryType, stringArg, mutationType } from "nexus";
import { makePrismaSchema, prismaObjectType } from "nexus-prisma";
import * as path from "path";
import datamodelInfo from "./generated/nexus-prisma";
import { prisma } from "./generated/prisma-client";

const Query = queryType({
  definition(t) {
    t.list.field("items", {
      type: "Item",
      resolve: (parent, args, ctx) => {
        return ctx.prisma.items();
      }
    });
  }
});

const Mutation = mutationType({
  definition(t) {
    t.field("createItem", {
      type: "Item",
      args: {
        name: stringArg()
      },
      resolve: (parent, { name }, ctx) => {
        return ctx.prisma.createItem({ name });
      }
    });

    t.field("deleteItem", {
      type: "Item",
      args: {
        id: idArg()
      },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.deleteItem({ id });
      }
    });
  }
});

const schema = makePrismaSchema({
  // Provide all the GraphQL types we've implemented
  types: [Query, Mutation],

  // Configure the interface to Prisma
  prisma: {
    datamodelInfo,
    client: prisma
  },

  // Specify where Nexus should put the generated files
  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts")
  },

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: false,
    output: false
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, "./types.ts"),
        alias: "types"
      }
    ],
    contextType: "types.Context"
  }
});

const server = new ApolloServer({
  schema,
  context: { prisma }
});

server.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
);
