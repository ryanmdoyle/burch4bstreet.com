import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MessageForm from 'src/components/MessageForm/MessageForm'

const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
    createMessage(input: $input) {
      id
    }
  }
`

const NewMessage = ({ subject, message }) => {
  const [createMessage, { loading, error }] = useMutation(
    CREATE_MESSAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Message created')
        // navigate(routes.messages())
      },
    }
  )

  const onSave = (input) => {
    createMessage({ variables: { input } })
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-full md:w-5/6 lg:w-2/3 xl:w-1/2">
        <MessageForm
          onSave={onSave}
          loading={loading}
          error={error}
          message={{ subject: subject, message: message }}
        />
      </div>
    </div>
  )
}

export default NewMessage
