import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Token {
  readonly id: string;
  readonly Name?: string;
  readonly Image?: string;
  readonly boardID: string;
  constructor(init: ModelInit<Token>);
  static copyOf(source: Token, mutator: (draft: MutableModel<Token>) => MutableModel<Token> | void): Token;
}

export declare class Board {
  readonly id: string;
  readonly Tokens?: (Token | null)[];
  readonly xDimension?: number;
  readonly yDimension?: number;
  readonly campaignID: string;
  constructor(init: ModelInit<Board>);
  static copyOf(source: Board, mutator: (draft: MutableModel<Board>) => MutableModel<Board> | void): Board;
}

export declare class Campaign {
  readonly id: string;
  readonly userID: string;
  readonly Boards?: (Board | null)[];
  constructor(init: ModelInit<Campaign>);
  static copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign>) => MutableModel<Campaign> | void): Campaign;
}

export declare class User {
  readonly id: string;
  readonly CreatedCampaign?: (Campaign | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class FreeToken {
  readonly id: string;
  readonly image?: string;
  readonly name?: string;
  constructor(init: ModelInit<FreeToken>);
  static copyOf(source: FreeToken, mutator: (draft: MutableModel<FreeToken>) => MutableModel<FreeToken> | void): FreeToken;
}