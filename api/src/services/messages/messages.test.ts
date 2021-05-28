import {
  messages,
  message,
  createMessage,
  updateMessage,
  deleteMessage,
} from './messages'

describe('messages', () => {
  scenario('returns all messages', async (scenario) => {
    const result = await messages()

    expect(result.length).toEqual(Object.keys(scenario.message).length)
  })

  scenario('returns a single message', async (scenario) => {
    const result = await message({ id: scenario.message.one.id })

    expect(result).toEqual(scenario.message.one)
  })

  scenario('creates a message', async (scenario) => {
    const result = await createMessage({
      input: { from: 'String', email: 'String' },
    })

    expect(result.from).toEqual('String')
    expect(result.email).toEqual('String')
  })

  scenario('updates a message', async (scenario) => {
    const original = await message({ id: scenario.message.one.id })
    const result = await updateMessage({
      id: original.id,
      input: { from: 'String2' },
    })

    expect(result.from).toEqual('String2')
  })

  scenario('deletes a message', async (scenario) => {
    const original = await deleteMessage({ id: scenario.message.one.id })
    const result = await message({ id: original.id })

    expect(result).toEqual(null)
  })
})
