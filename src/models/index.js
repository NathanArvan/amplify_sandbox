// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Token, Board, Campaign, User, Todo } = initSchema(schema);

export {
  Token,
  Board,
  Campaign,
  User,
  Todo
};