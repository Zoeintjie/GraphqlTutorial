import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';

const server = express();

console.log("some text");

server.listen(4000, () => {
    console.log("listening on port 4000");
});