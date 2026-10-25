# Burch 4 B-Street

**Live:** [burch4bstreet.netlify.app](https://burch4bstreet.netlify.app/)

A campaign site that collected public letters of support for Lyndsay Burch to
become Artistic Director of B Street Theatre in Sacramento. Supporters write a
letter (optionally attaching a file), it goes to the theatre's board by email,
and it appears on a public "Letters" wall.

## Features

- **Letter submission form** with optional file attachment (Filestack upload)
- **Transactional email via Postmark templates**: each submission sends a
  confirmation to the writer and a notification to the board
- **Public letters page** that exposes only the writer's name and message;
  email addresses and attachments stay private
- **Admin area** (behind Netlify Identity, `ADMIN` role only) to review, edit,
  and delete submissions
- User input is sanitized with `sanitize-html` before it's emailed or stored
- Marketing pages are prerendered for fast loads

## Tech

- [RedwoodJS](https://redwoodjs.com/): React frontend, GraphQL API, Prisma
- PostgreSQL
- Tailwind CSS
- Postmark for email, Filestack for uploads
- Netlify (hosting, serverless functions, Identity auth)
- TypeScript, Jest scenario tests for the messages service

## Running locally

Set `DATABASE_URL`, `POSTMARK`, and `BOARD_EMAILS` in `.env`, then:

```bash
yarn install
yarn rw prisma migrate dev
yarn rw dev
```
