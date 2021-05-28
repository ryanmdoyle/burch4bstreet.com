import { Prisma } from '@prisma/client'
import { db } from 'src/lib/db'
// import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  // rules.add(requireAuth)
}

export const messages = () => {
  return db.message.findMany()
}

export const message = ({ id }: Prisma.MessageWhereUniqueInput) => {
  return db.message.findUnique({
    where: { id },
  })
}

interface CreateMessageArgs {
  input: Prisma.MessageCreateInput
}

export const createMessage = ({ input }: CreateMessageArgs) => {
  return db.message.create({
    data: input,
  })
}

interface UpdateMessageArgs extends Prisma.MessageWhereUniqueInput {
  input: Prisma.MessageUpdateInput
}

export const updateMessage = ({ id, input }: UpdateMessageArgs) => {
  return db.message.update({
    data: input,
    where: { id },
  })
}

export const deleteMessage = ({ id }: Prisma.MessageWhereUniqueInput) => {
  return db.message.delete({
    where: { id },
  })
}
