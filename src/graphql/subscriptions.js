/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onCreateToken = /* GraphQL */ `
  subscription OnCreateToken {
    onCreateToken {
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
export const onUpdateToken = /* GraphQL */ `
  subscription OnUpdateToken {
    onUpdateToken {
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
export const onDeleteToken = /* GraphQL */ `
  subscription OnDeleteToken {
    onDeleteToken {
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
export const onCreateBoard = /* GraphQL */ `
  subscription OnCreateBoard {
    onCreateBoard {
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
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard {
    onUpdateBoard {
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
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard {
    onDeleteBoard {
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
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
