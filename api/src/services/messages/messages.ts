import { Prisma } from '@prisma/client'
import { db } from 'src/lib/db'
// import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'

import nodemailer from 'nodemailer'
import md5 from 'md5'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  // rules.add(requireAuth)
  rules.skip()
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

export const createMessage = async ({ input }: CreateMessageArgs) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.transmail.com',
    port: 587,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
  })
  // CONFIRMATION
  await transporter.sendMail({
    from: '"Support Lyndsay" <supportlyndsay@burch4bstreet.com>', // sender address
    to: input.email, // list of receivers
    subject: `Confirmation - ${input.subject}`, // Subject line
    text: input.message, // plain text body
    html: `
    <h1 style="color:#2DBFB0;">Thanks for the support!</h1>
    <p>We really appreciate the time you took to support Lyndsay. Take a look at a copy of the message sent below.</p>
    <p>${input.message}</p>
    `, // html body
  })
  // TO THE BOARD
  await transporter.sendMail({
    from: '"Support Lyndsay" <supportlyndsay@burch4bstreet.com>', // sender address
    to: process.env.BOARD_EMAILS, // list of receivers
    subject: `${input.subject} - From ${input.from}`, // Subject line
    text: input.message, // plain text body
    html: `
    <h1 style="color:#2DBFB0;">In support of Lyndsay Burch!</h1>
    <p>${input.message}</p>
    `, // html body
  })
  const emailHash = md5(input.email)

  // use md5 to hash email before saving (can be used to check for duplicates)
  return db.message.create({
    data: {
      from: input.from,
      email: emailHash,
      subject: input.subject,
      message: input.message,
    },
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
