export const schema = gql`
  type Message {
    id: String!
    from: String!
    email: String!
    affiliation: String
    subject: String
    message: String
    filename: String
    url: String
  }

  type Query {
    messages: [Message!]!
    messagesPublic: [Message!]!
    message(id: String!): Message
  }

  input CreateMessageInput {
    from: String!
    email: String!
    affiliation: String
    subject: String
    message: String
    filename: String
    url: String
  }

  input UpdateMessageInput {
    from: String
    email: String
    affiliation: String
    subject: String
    message: String
    filename: String
    url: String
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message!
    updateMessage(id: String!, input: UpdateMessageInput!): Message!
    deleteMessage(id: String!): Message!
  }
`
