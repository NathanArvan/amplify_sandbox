/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createToken = /* GraphQL */ `
  mutation CreateToken(
    $input: CreateTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    createToken(input: $input, condition: $condition) {
      id
      Name
      Image
      boardID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateToken = /* GraphQL */ `
  mutation UpdateToken(
    $input: UpdateTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    updateToken(input: $input, condition: $condition) {
      id
      Name
      Image
      boardID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteToken = /* GraphQL */ `
  mutation DeleteToken(
    $input: DeleteTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    deleteToken(input: $input, condition: $condition) {
      id
      Name
      Image
      boardID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createBoard = /* GraphQL */ `
  mutation CreateBoard(
    $input: CreateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    createBoard(input: $input, condition: $condition) {
      id
      xDimension
      yDimension
      campaignID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Tokens {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateBoard = /* GraphQL */ `
  mutation UpdateBoard(
    $input: UpdateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    updateBoard(input: $input, condition: $condition) {
      id
      xDimension
      yDimension
      campaignID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Tokens {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteBoard = /* GraphQL */ `
  mutation DeleteBoard(
    $input: DeleteBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    deleteBoard(input: $input, condition: $condition) {
      id
      xDimension
      yDimension
      campaignID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Tokens {
        nextToken
        startedAt
      }
    }
  }
`;
export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
      id
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Boards {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
      id
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Boards {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
      id
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Boards {
        nextToken
        startedAt
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CreatedCampaign {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CreatedCampaign {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CreatedCampaign {
        nextToken
        startedAt
      }
    }
  }
`;
export const createFreeToken = /* GraphQL */ `
  mutation CreateFreeToken(
    $input: CreateFreeTokenInput!
    $condition: ModelFreeTokenConditionInput
  ) {
    createFreeToken(input: $input, condition: $condition) {
      id
      image
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateFreeToken = /* GraphQL */ `
  mutation UpdateFreeToken(
    $input: UpdateFreeTokenInput!
    $condition: ModelFreeTokenConditionInput
  ) {
    updateFreeToken(input: $input, condition: $condition) {
      id
      image
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteFreeToken = /* GraphQL */ `
  mutation DeleteFreeToken(
    $input: DeleteFreeTokenInput!
    $condition: ModelFreeTokenConditionInput
  ) {
    deleteFreeToken(input: $input, condition: $condition) {
      id
      image
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
