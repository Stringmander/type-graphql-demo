import { ApolloServer, gql } from 'apollo-server';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import ProjectResolver from './resolvers/ProjectResolver';
import TaskResolver from './resolvers/TaskResolver';

const PORT = process.env.port || 4000;

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ProjectResolver, TaskResolver],
    emitSchemaFile: true,
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  const { url } = await server.listen(PORT);
  console.log(`🚀 Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
