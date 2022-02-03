/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateToken = /* GraphQL */ `
  subscription OnCreateToken {
    onCreateToken {
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
export const onUpdateToken = /* GraphQL */ `
  subscription OnUpdateToken {
    onUpdateToken {
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
export const onDeleteToken = /* GraphQL */ `
  subscription OnDeleteToken {
    onDeleteToken {
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
export const onCreateBoard = /* GraphQL */ `
  subscription OnCreateBoard {
    onCreateBoard {
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
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard {
    onUpdateBoard {
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
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard {
    onDeleteBoard {
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
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateFreeToken = /* GraphQL */ `
  subscription OnCreateFreeToken {
    onCreateFreeToken {
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
export const onUpdateFreeToken = /* GraphQL */ `
  subscription OnUpdateFreeToken {
    onUpdateFreeToken {
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
export const onDeleteFreeToken = /* GraphQL */ `
  subscription OnDeleteFreeToken {
    onDeleteFreeToken {
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
