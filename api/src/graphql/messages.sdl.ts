export const schema = gql`
  type Message {
    id: String!
    from: String!
    email: String!
    subject: String
    message: String
  }

  type Query {
    messages: [Message!]!
    message(id: String!): Message
  }

  input CreateMessageInput {
    from: String!
    email: String!
    subject: String
    message: String
  }

  input UpdateMessageInput {
    from: String
    email: String
    subject: String
    message: String
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message!
    updateMessage(id: String!, input: UpdateMessageInput!): Message!
    deleteMessage(id: String!): Message!
  }
`
