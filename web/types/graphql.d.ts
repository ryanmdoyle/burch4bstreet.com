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
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type CreateMessageInput = {
  from: Scalars['String'];
  email: Scalars['String'];
  affiliation?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};





export type Message = {
  __typename?: 'Message';
  id: Scalars['String'];
  from: Scalars['String'];
  email: Scalars['String'];
  affiliation?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: Message;
  updateMessage: Message;
  deleteMessage: Message;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationUpdateMessageArgs = {
  id: Scalars['String'];
  input: UpdateMessageInput;
};


export type MutationDeleteMessageArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  message?: Maybe<Message>;
  messages: Array<Message>;
  messagesPublic: Array<Message>;
  redwood?: Maybe<Redwood>;
};


export type QueryMessageArgs = {
  id: Scalars['String'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};


export type UpdateMessageInput = {
  from?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  affiliation?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Find_Message_By_IdVariables = Exact<{
  id: Scalars['String'];
}>;


export type Find_Message_By_Id = (
  { __typename?: 'Query' }
  & { message?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'from' | 'email' | 'subject' | 'message'>
  )> }
);

export type UpdateMessageMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateMessageInput;
}>;


export type UpdateMessageMutation = (
  { __typename?: 'Mutation' }
  & { updateMessage: (
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'from' | 'email' | 'subject' | 'message'>
  ) }
);

export type DeleteMessageMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteMessageMutation = (
  { __typename?: 'Mutation' }
  & { deleteMessage: (
    { __typename?: 'Message' }
    & Pick<Message, 'id'>
  ) }
);

export type MessagesVariables = Exact<{ [key: string]: never; }>;


export type Messages = (
  { __typename?: 'Query' }
  & { messages: Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'from' | 'email' | 'subject' | 'message'>
  )> }
);

export type MessagesPublicQueryVariables = Exact<{ [key: string]: never; }>;


export type MessagesPublicQuery = (
  { __typename?: 'Query' }
  & { messagesPublic: Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'from' | 'message'>
  )> }
);

export type CreateMessageMutationVariables = Exact<{
  input: CreateMessageInput;
}>;


export type CreateMessageMutation = (
  { __typename?: 'Mutation' }
  & { createMessage: (
    { __typename?: 'Message' }
    & Pick<Message, 'id'>
  ) }
);
