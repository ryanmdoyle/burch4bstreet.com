import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const MessageForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.message?.id)
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
        <TextField
          name="email"
          defaultValue={props.message?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="email" className="rw-field-error text-red-500" />

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
        <TextField
          name="message"
          defaultValue={props.message?.message}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="message" className="rw-field-error text-red-500" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button bg-sofiaGreen hover:bg-sofiaGreenDark text-white"
          >
            Send!
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MessageForm
