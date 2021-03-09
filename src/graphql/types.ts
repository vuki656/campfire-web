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

export type CreateInviteInput = {
  fromUserId: Scalars['String'];
  toUserId: Scalars['String'];
  groupId: Scalars['String'];
};

export type CreateInvitePayload = {
  __typename?: 'CreateInvitePayload';
  invite: InviteType;
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


export type DeleteInviteInput = {
  inviteId: Scalars['String'];
};

export type DeleteInvitePayload = {
  __typename?: 'DeleteInvitePayload';
  invite: InviteType;
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

export type FavoritePostPayload = {
  __typename?: 'FavoritePostPayload';
  post: PostType;
};

export type FavoriteType = {
  __typename?: 'FavoriteType';
  userId: Scalars['String'];
};

export type GroupArgs = {
  groupId: Scalars['String'];
};

export type GroupInvitesArgs = {
  groupId: Scalars['String'];
};

export type GroupType = {
  __typename?: 'GroupType';
  id: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  author?: Maybe<UserType>;
  posts?: Maybe<Array<PostType>>;
};

export type InviteType = {
  __typename?: 'InviteType';
  id: Scalars['String'];
  fromUser: UserType;
  toUser: UserType;
  group?: Maybe<GroupType>;
};

export type LogInUserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LogInUserPayload = {
  __typename?: 'LogInUserPayload';
  userId: Scalars['String'];
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  logInUser: LogInUserPayload;
  createGroup: CreateGroupPayload;
  editGroup: EditGroupPayload;
  createPost: CreatePostPayload;
  favoritePost: FavoritePostPayload;
  creteUserInvite: CreateInvitePayload;
  deleteInvite: DeleteInvitePayload;
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


export type MutationCreteUserInviteArgs = {
  input: CreateInviteInput;
};


export type MutationDeleteInviteArgs = {
  input: DeleteInviteInput;
};

export type NonGroupMembersArgs = {
  groupId: Scalars['String'];
};

export type PostMetadataType = {
  __typename?: 'PostMetadataType';
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  imageLink?: Maybe<Scalars['String']>;
  faviconLink?: Maybe<Scalars['String']>;
};

export type PostType = {
  __typename?: 'PostType';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  createdAt: Scalars['DateTime'];
  author: UserType;
  metadata?: Maybe<PostMetadataType>;
  favoritedBy?: Maybe<Array<FavoriteType>>;
  group?: Maybe<GroupType>;
};

export type Query = {
  __typename?: 'Query';
  nonGroupMembers: Array<UserType>;
  user?: Maybe<UserType>;
  group?: Maybe<GroupType>;
  userCreatedGroups: Array<GroupType>;
  userJoinedGroups: Array<GroupType>;
  favoritePosts: Array<PostType>;
  userInvites: Array<InviteType>;
  groupInvites: Array<InviteType>;
};


export type QueryNonGroupMembersArgs = {
  args: NonGroupMembersArgs;
};


export type QueryGroupArgs = {
  args: GroupArgs;
};


export type QueryGroupInvitesArgs = {
  args: GroupInvitesArgs;
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
  )>>, author?: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'username' | 'imageURL'>
  )> }
);

export type PostPayloadFragment = (
  { __typename?: 'PostType' }
  & Pick<PostType, 'id' | 'description' | 'createdAt' | 'link'>
  & { metadata?: Maybe<(
    { __typename?: 'PostMetadataType' }
    & Pick<PostMetadataType, 'title' | 'siteName' | 'imageLink' | 'faviconLink'>
  )>, favoritedBy?: Maybe<Array<(
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

export type DeleteInviteMutationVariables = Exact<{
  input: DeleteInviteInput;
}>;


export type DeleteInviteMutation = (
  { __typename?: 'Mutation' }
  & { deleteInvite: (
    { __typename?: 'DeleteInvitePayload' }
    & { invite: (
      { __typename?: 'InviteType' }
      & { fromUser: (
        { __typename?: 'UserType' }
        & Pick<UserType, 'id'>
      ), toUser: (
        { __typename?: 'UserType' }
        & Pick<UserType, 'id'>
      ) }
    ) }
  ) }
);

export type CreateInviteMutationVariables = Exact<{
  input: CreateInviteInput;
}>;


export type CreateInviteMutation = (
  { __typename?: 'Mutation' }
  & { creteUserInvite: (
    { __typename?: 'CreateInvitePayload' }
    & { invite: (
      { __typename?: 'InviteType' }
      & { fromUser: (
        { __typename?: 'UserType' }
        & Pick<UserType, 'id' | 'username' | 'imageURL'>
      ), toUser: (
        { __typename?: 'UserType' }
        & Pick<UserType, 'id' | 'username' | 'imageURL'>
      ) }
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
  & { favoritePost: (
    { __typename?: 'FavoritePostPayload' }
    & { post: (
      { __typename?: 'PostType' }
      & PostPayloadFragment
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
    & Pick<LogInUserPayload, 'token' | 'userId'>
  ) }
);

export type GroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupsQuery = (
  { __typename?: 'Query' }
  & { userCreatedGroups: Array<(
    { __typename?: 'GroupType' }
    & Pick<GroupType, 'id' | 'name'>
    & { author?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'id' | 'username' | 'imageURL'>
    )> }
  )>, userJoinedGroups: Array<(
    { __typename?: 'GroupType' }
    & Pick<GroupType, 'id' | 'name'>
    & { author?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'id' | 'username' | 'imageURL'>
    )> }
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

export type NonGroupMembersQueryVariables = Exact<{
  args: NonGroupMembersArgs;
}>;


export type NonGroupMembersQuery = (
  { __typename?: 'Query' }
  & { nonGroupMembers: Array<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'imageURL' | 'username'>
  )> }
);

export type GroupInvitesQueryVariables = Exact<{
  args: GroupInvitesArgs;
}>;


export type GroupInvitesQuery = (
  { __typename?: 'Query' }
  & { groupInvites: Array<(
    { __typename?: 'InviteType' }
    & { fromUser: (
      { __typename?: 'UserType' }
      & Pick<UserType, 'id' | 'imageURL' | 'username'>
    ), toUser: (
      { __typename?: 'UserType' }
      & Pick<UserType, 'id' | 'imageURL' | 'username'>
    ) }
  )> }
);

export type UserInvitesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserInvitesQuery = (
  { __typename?: 'Query' }
  & { userInvites: Array<(
    { __typename?: 'InviteType' }
    & { fromUser: (
      { __typename?: 'UserType' }
      & Pick<UserType, 'id' | 'username'>
    ), group?: Maybe<(
      { __typename?: 'GroupType' }
      & Pick<GroupType, 'id' | 'name'>
    )> }
  )> }
);

export type FavoritePostsQueryVariables = Exact<{ [key: string]: never; }>;


export type FavoritePostsQuery = (
  { __typename?: 'Query' }
  & { favoritePosts: Array<(
    { __typename?: 'PostType' }
    & PostPayloadFragment
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
