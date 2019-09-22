# GraphQL Apollo Server Example

This example implements a **GraphQL server with TypeScript** based on Prisma, [apollo-server](https://www.apollographql.com/docs/apollo-server/) and [GraphQL Nexus](https://graphql-nexus.com/). The DB is PostgresQL.

## How to use

### Pre-reqs

#### Prisma CLI

To run the example, you need the Prisma CLI. Please install it via NPM or [using another method](https://www.prisma.io/docs/prisma-cli-and-configuration/using-the-prisma-cli-alx4/#installation):

```
npm install -g prisma
```

#### Docker

Ensure you have Docker installed on your machine. If not, you can get it from [here](https://store.docker.com/search?offering=community&type=edition).
### 1. Install dependencies

npm install

### 2. Set up database & deploy Prisma datamodel

1. Run `docker-compose up`
1. Run `prisma deploy`

</details>

You can now use [Prisma Admin](https://www.prisma.io/docs/prisma-admin/overview-el3e/) to view and edit your data at ``http://localhost:4466/_admin`.

### 3. Start the GraphQL server

Launch the GraphQL server with this command:

```
npm run start
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

### 3. Changing the GraphQL schema

To make changes to the GraphQL schema, you need to manipulate the `Query` and `Mutation` types that are defined in [`index.ts`](./src/index.ts). 

Note that the [`start`](./package.json#L6) script also starts a development server that automatically updates your schema every time you save a file. This way, the auto-generated [GraphQL schema](./src/generated/schema.graphql) updates whenever you make changes in to the `Query` or `Mutation` types inside your TypeScript code.
