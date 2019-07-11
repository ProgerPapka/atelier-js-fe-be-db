import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
const port = 3000;

const schema = buildSchema(`
  type Query {
    postTitle: String,
    blogTitle: String
  }
`);

const root = {
  blogTitle: () => 'scotch.io',
  postTitle: () => 'Build a Simple GraphQL Server With Express and NodeJS'
};

const app = express();
app.use(
  '/',
  graphqlHTTP({
    graphiql: true,
    rootValue: root,
    schema
  })
);

app.listen(port);
console.log('GraphQL API server running at localhost: ' + port);
