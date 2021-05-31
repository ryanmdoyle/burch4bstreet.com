export const QUERY = gql`
  query MessagesPublicQuery {
    messages {
      id
      from
      message
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ messages }) => {
  return (
    <ul>
      {messages.map((message) => {
        return (
          <li className="pb-4" key={message.id}>
            <p className="text-gray-600 italic">{message.message}</p>
            <h3 className="font-display text-right text-sofiaGreen">
              - {message.from}
            </h3>
          </li>
        )
      })}
    </ul>
  )
}
