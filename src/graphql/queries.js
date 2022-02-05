/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getToken = /* GraphQL */ `
  query GetToken($id: ID!) {
    getToken(id: $id) {
      id
      boardID
      image
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTokens = /* GraphQL */ `
  query ListTokens(
    $filter: ModelTokenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTokens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        boardID
        image
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTokens = /* GraphQL */ `
  query SyncTokens(
    $filter: ModelTokenFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTokens(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        boardID
        image
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBoard = /* GraphQL */ `
  query GetBoard($id: ID!) {
    getBoard(id: $id) {
      id
      campaignID
      Tokens {
        nextToken
        startedAt
      }
      backgroundImage
      xDimension
      yDimension
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBoards = /* GraphQL */ `
  query ListBoards(
    $filter: ModelBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        campaignID
        backgroundImage
        xDimension
        yDimension
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBoards = /* GraphQL */ `
  query SyncBoards(
    $filter: ModelBoardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBoards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        campaignID
        backgroundImage
        xDimension
        yDimension
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      userID
      Boards {
        nextToken
        startedAt
      }
      Name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        Name
        createdAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCampaigns = /* GraphQL */ `
  query SyncCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCampaigns(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        Name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      CreatedCampaigns {
        nextToken
        startedAt
      }
      FirstName
      LastName
      email
      userName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FirstName
        LastName
        email
        userName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        FirstName
        LastName
        email
        userName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
