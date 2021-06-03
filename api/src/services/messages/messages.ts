import { Prisma } from '@prisma/client'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'
import { ServerClient } from 'postmark'

import sanitizeHtml from 'sanitize-html'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  // rules.add(requireAuth)
  rules.skip()
}

export const messages = () => {
  requireAuth({ role: 'ADMIN' })
  return db.message.findMany()
}

export const messagesPublic = () => {
  return db.message.findMany({
    select: {
      id: true,
      from: true,
      message: true,
    },
  })
}

export const message = ({ id }: Prisma.MessageWhereUniqueInput) => {
  requireAuth({ role: 'ADMIN' })
  return db.message.findUnique({
    where: { id },
  })
}

interface CreateMessageArgs {
  input: Prisma.MessageCreateInput
}

export const createMessage = async ({ input }: CreateMessageArgs) => {
  const sanitizedSubject = sanitizeHtml(input.subject)
  const sanitizedMessage = sanitizeHtml(input.message)
  const client = new ServerClient(process.env.POSTMARK)

  // Sender Confirmation
  client.sendEmailWithTemplate({
    From: 'supportlyndsay@burch4bstreet.com',
    To: input.email,
    MessageStream: 'letter-confirmation',
    TemplateAlias: 'burch4bstreet-confirmation',
    TemplateModel: {
      from: input.from,
      affiliation: input.affiliation,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      filename: input.filename,
      url: input.url,
    },
  })

  // Recipient Notification
  client.sendEmailWithTemplate({
    From: 'supportlyndsay@burch4bstreet.com',
    To: process.env.BOARD_EMAILS,
    MessageStream: 'letter-notification',
    TemplateAlias: 'burch4bstreet-notification',
    TemplateModel: {
      from: input.from,
      affiliation: input.affiliation,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      filename: input.filename,
      url: input.url,
    },
  })

  return db.message.create({
    data: {
      from: input.from,
      email: input.email,
      affiliation: input.affiliation,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      filename: input.filename,
      url: input.url,
    },
  })
}

interface UpdateMessageArgs extends Prisma.MessageWhereUniqueInput {
  input: Prisma.MessageUpdateInput
}

export const updateMessage = ({ id, input }: UpdateMessageArgs) => {
  requireAuth({ role: 'ADMIN' })
  return db.message.update({
    data: input,
    where: { id },
  })
}

export const deleteMessage = ({ id }: Prisma.MessageWhereUniqueInput) => {
  requireAuth({ role: 'ADMIN' })
  return db.message.delete({
    where: { id },
  })
}
