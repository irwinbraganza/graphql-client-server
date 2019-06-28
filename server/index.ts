import * as Koa from 'koa';
// const { typeDefs } = require("./typeDefs");
// const { resolvers } = require("./resolvers");
const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const Router = require("koa-router");
const { ApolloServer, gql } = require("apollo-server-koa");
const graphiql = require("koa-graphiql").default;

const schema = gql`
  type Query {
    hello: String
  }
`

const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev, dir: './client' });
const handle = app.getRequestHandler();
const graphQLServer = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query: {hello: () => 'hello server'},
  },
  
  // Make graphql playgroud available at /graphql
  playground: {
    endpoint: "/graphql"
  },
  bodyParser: true
});

// const graphQLServer = new ApolloServer({
//   typeDefs,
//   resolvers,
//   // Make graphql playgroud available at /graphql
//   playground: {
//     endpoint: "/graphql"
//   },
//   bodyParser: true
// });

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  graphQLServer.applyMiddleware({
    app: server
  });

  // If you prefer graphiql over graphql playground
  router.get(
    "/graphiql",
    graphiql(async (ctx:any) => ({
      url: "/graphql"
    }))
  );

  router.get("*", async (ctx:any) => {
    if (!ctx.path.match(/graphql/)) {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    }
  });

  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
    console.log(`> GraphiQL IDE available on http://localhost:${port}/graphiql`);
    console.log(`> GraphQL Server (And GraphQL Playground) ready at http://localhost:${port}${graphQLServer.graphqlPath}`);
  });
});