// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Token, Board, Campaign, User, FreeToken } = initSchema(schema);

export {
  Token,
  Board,
  Campaign,
  User,
  FreeToken
};