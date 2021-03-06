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

export type CreatePostInput = {
  description: Scalars['String'];
  link: Scalars['String'];
  groupId: Scalars['String'];
};

export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  post: PostType;
};


export type EditGroupInput = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type EditGroupPayload = {
  __typename?: 'EditGroupPayload';
  group: GroupType;
};

export type FavoritePostInput = {
  postId: Scalars['String'];
};

export type FavoriteType = {
  __typename?: 'FavoriteType';
  userId: Scalars['String'];
};

export type GroupArgs = {
  groupId: Scalars['String'];
};

export type GroupType = {
  __typename?: 'GroupType';
  id: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  author: UserType;
  posts?: Maybe<Array<PostType>>;
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
  editGroup: EditGroupPayload;
  createPost: CreatePostPayload;
  favoritePost: Scalars['Boolean'];
};


export type MutationLogInUserArgs = {
  input: LogInUserInput;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationEditGroupArgs = {
  input: EditGroupInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationFavoritePostArgs = {
  input: FavoritePostInput;
};

export type PostType = {
  __typename?: 'PostType';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  link: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  imageLink?: Maybe<Scalars['String']>;
  faviconLink?: Maybe<Scalars['String']>;
  author: UserType;
  favoritedBy?: Maybe<Array<FavoriteType>>;
  group?: Maybe<GroupType>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<UserType>;
  group?: Maybe<GroupType>;
  userGroups: Array<GroupType>;
  userJoinedGroups: Array<GroupType>;
};


export type QueryGroupArgs = {
  args: GroupArgs;
};

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['String'];
  username: Scalars['String'];
  imageURL: Scalars['String'];
};

export type GroupPayloadFragment = (
  { __typename?: 'GroupType' }
  & Pick<GroupType, 'id' | 'name'>
  & { posts?: Maybe<Array<(
    { __typename?: 'PostType' }
    & PostPayloadFragment
  )>>, author: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'username' | 'imageURL'>
  ) }
);

export type PostPayloadFragment = (
  { __typename?: 'PostType' }
  & Pick<PostType, 'id' | 'description' | 'createdAt' | 'title' | 'siteName' | 'imageLink' | 'faviconLink' | 'link'>
  & { favoritedBy?: Maybe<Array<(
    { __typename?: 'FavoriteType' }
    & Pick<FavoriteType, 'userId'>
  )>>, author: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'username' | 'imageURL'>
  ) }
);

export type CreateGroupMutationVariables = Exact<{
  input: CreateGroupInput;
}>;


export type CreateGroupMutation = (
  { __typename?: 'Mutation' }
  & { createGroup: (
    { __typename?: 'CreateGroupPayload' }
    & { group: (
      { __typename?: 'GroupType' }
      & GroupPayloadFragment
    ) }
  ) }
);

export type EditGroupMutationVariables = Exact<{
  input: EditGroupInput;
}>;


export type EditGroupMutation = (
  { __typename?: 'Mutation' }
  & { editGroup: (
    { __typename?: 'EditGroupPayload' }
    & { group: (
      { __typename?: 'GroupType' }
      & GroupPayloadFragment
    ) }
  ) }
);

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'CreatePostPayload' }
    & { post: (
      { __typename?: 'PostType' }
      & PostPayloadFragment
    ) }
  ) }
);

export type FavoritePostMutationVariables = Exact<{
  input: FavoritePostInput;
}>;


export type FavoritePostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'favoritePost'>
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

export type GroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupsQuery = (
  { __typename?: 'Query' }
  & { userGroups: Array<(
    { __typename?: 'GroupType' }
    & GroupPayloadFragment
  )>, userJoinedGroups: Array<(
    { __typename?: 'GroupType' }
    & GroupPayloadFragment
  )> }
);

export type GroupQueryVariables = Exact<{
  args: GroupArgs;
}>;


export type GroupQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'GroupType' }
    & GroupPayloadFragment
  )> }
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'username' | 'imageURL'>
  )> }
);
