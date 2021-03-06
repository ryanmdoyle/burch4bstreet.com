import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'
import { useState } from 'react'

import ReCAPTCHA from 'react-google-recaptcha'
import * as filestack from 'filestack-js'

const MessageForm = (props) => {
  const [recap, setRecap] = useState(null)
  const [uploadUrl, setUploadUrl] = useState(null)
  const [uploadFilename, setUploadFilename] = useState(null)

  const onSubmit = (data) => {
    data.url = uploadUrl
    data.filename = uploadFilename

    if (recap !== null) {
      props.onSave(data, props?.message?.id)
    }
  }

  const onChange = (value) => {
    setRecap(value)
  }

  const handleUpload = () => {
    const client = filestack.init(process.env.FILESTACK_API_KEY)

    const options = {
      onFileSelected: (file) => {
        // If you throw any error in this function it will reject the file selection.
        // The error message will be displayed to the user as an alert.
        if (file.size > 1000 * 3000) {
          throw new Error('File too big, select something smaller than 3MB')
        }
      },
      onUploadDone: (data) => {
        setUploadUrl(data.filesUploaded[0].url)
        setUploadFilename(data.filesUploaded[0].filename)
      },
    }

    client.picker(options).open()
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="from"
          className="rw-label font-display text-sofiaGreen text-lg lg:text:lg"
          errorClassName="rw-label font-display text-red-500 text-xl"
        >
          Name
        </Label>
        <span className="text-gray-500 italic text-xs">
          Your name will be shared with your message
        </span>
        <TextField
          name="from"
          defaultValue={props.message?.from}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="from" className="rw-field-error text-red-500" />

        <Label
          name="email"
          className="rw-label font-display text-sofiaGreen text-lg lg:text:lg"
          errorClassName="rw-label font-display text-red-500 text-xl"
        >
          Your Email Address
        </Label>
        <span className="text-gray-500 italic text-xs">
          Your email not be shared
        </span>
        <TextField
          name="email"
          defaultValue={props.message?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            pattern:
              // eslint-disable-next-line no-control-regex
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
          }}
        />
        <FieldError name="email" className="rw-field-error text-red-500" />

        <Label
          name="affiliation"
          className="rw-label font-display text-sofiaGreen text-lg lg:text:lg"
          errorClassName="rw-label font-display text-red-500 text-xl"
        >
          Professional Title/Company Affiliation
        </Label>
        <span className="text-gray-500 italic text-xs">Optional</span>
        <TextField
          name="affiliation"
          defaultValue={props.message?.affiliation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />
        <FieldError
          name="affiliation"
          className="rw-field-error text-red-500"
        />

        <Label
          name="subject"
          className="rw-label font-display text-sofiaGreen text-lg lg:text:lg"
          errorClassName="rw-label font-display text-red-500 text-xl"
        >
          Subject
        </Label>
        <TextField
          name="subject"
          defaultValue={props.message?.subject}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="subject" className="rw-field-error text-red-500" />

        <Label
          name="message"
          className="rw-label font-display text-sofiaGreen text-lg lg:text:lg"
          errorClassName="rw-label font-display text-red-500 text-xl"
        >
          Message of Support!
        </Label>
        <TextAreaField
          name="message"
          defaultValue={props.message?.message}
          className="rw-input h-96"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="message" className="rw-field-error text-red-500" />

        <Label
          name="upload"
          className="rw-label font-display text-sofiaGreen text-lg lg:text:lg"
          errorClassName="rw-label font-display text-red-500 text-xl"
        >
          Upload a file.
        </Label>
        <span className="text-gray-500 italic text-xs">
          Optional - Upload a PDF or document with your message of support.
        </span>
        <div className="flex items-center">
          <button
            name="upload"
            className="h-8 bg-sofiaGreen text-white rounded px-4 flex items-center justify-center my-4"
            onClick={handleUpload}
          >
            UPLOAD
          </button>
          <span className="ml-4 text-sofiaGreen">
            {uploadFilename ? `Uploaded: ${uploadFilename} ???` : null}
          </span>
        </div>

        <div className="flex justify-center mt-8">
          <ReCAPTCHA
            sitekey={'6LeqBf0aAAAAAPR1sMETC7i0lNvYtMkGkW6NNOxp'}
            onChange={onChange}
          />
        </div>

        <div className="rw-button-group">
          <Submit
            disabled={recap === null || props.loading}
            className={`${
              recap === null || props.loading ? 'cursor-not-allowed' : ''
            } rw-button bg-sofiaGreen hover:bg-sofiaGreenDark text-white disabled:opacity-50`}
          >
            Send!
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MessageForm
