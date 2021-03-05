/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
eslint-disable-next-line unicorn/no-abusive-eslint-disable
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: string;
};




export type CreateGroupInput = {
  name: Scalars['String'];
};

export type CreateGroupPayload = {
  __typename?: 'CreateGroupPayload';
  group: GroupType;
};


export type GroupType = {
  __typename?: 'GroupType';
  id: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  author: UserType;
};

export type LogInUserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LogInUserPayload = {
  __typename?: 'LogInUserPayload';
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  logInUser: LogInUserPayload;
  createGroup: CreateGroupPayload;
};


export type MutationLogInUserArgs = {
  input: LogInUserInput;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<UserType>;
  userGroups: Array<GroupType>;
  userJoinedGroups: Array<GroupType>;
};

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['String'];
  username: Scalars['String'];
  imageURL: Scalars['String'];
};

export type CreateGroupMutationVariables = Exact<{
  input: CreateGroupInput;
}>;


export type CreateGroupMutation = (
  { __typename?: 'Mutation' }
  & { createGroup: (
    { __typename?: 'CreateGroupPayload' }
    & { group: (
      { __typename?: 'GroupType' }
      & Pick<GroupType, 'id' | 'name'>
    ) }
  ) }
);

export type LogInUserMutationVariables = Exact<{
  input: LogInUserInput;
}>;


export type LogInUserMutation = (
  { __typename?: 'Mutation' }
  & { logInUser: (
    { __typename?: 'LogInUserPayload' }
    & Pick<LogInUserPayload, 'token'>
  ) }
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'username' | 'imageURL'>
  )> }
);
