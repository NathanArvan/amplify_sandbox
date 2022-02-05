import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TokenMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CampaignMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Token {
  readonly id: string;
  readonly boardID: string;
  readonly image?: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Token, TokenMetaData>);
  static copyOf(source: Token, mutator: (draft: MutableModel<Token, TokenMetaData>) => MutableModel<Token, TokenMetaData> | void): Token;
}

export declare class Board {
  readonly id: string;
  readonly campaignID: string;
  readonly Tokens?: (Token | null)[];
  readonly backgroundImage?: string;
  readonly xDimension?: number;
  readonly yDimension?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Board, BoardMetaData>);
  static copyOf(source: Board, mutator: (draft: MutableModel<Board, BoardMetaData>) => MutableModel<Board, BoardMetaData> | void): Board;
}

export declare class Campaign {
  readonly id: string;
  readonly userID: string;
  readonly Boards?: (Board | null)[];
  readonly Name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Campaign, CampaignMetaData>);
  static copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign, CampaignMetaData>) => MutableModel<Campaign, CampaignMetaData> | void): Campaign;
}

export declare class User {
  readonly id: string;
  readonly CreatedCampaigns?: (Campaign | null)[];
  readonly FirstName?: string;
  readonly LastName?: string;
  readonly email?: string;
  readonly userName?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}