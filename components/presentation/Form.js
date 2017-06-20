// @flow

import { Form } from 'formsy-react'

type Props = {
  children?: any
}

const GCForm = (props: Props) => (
  <div>
    <Form {...props}>
      {props.children}
    </Form>
    <style jsx>{`
      div :global(form) {
        display: flex;
        flex-direction: column;
        max-width: 256px;
      }
    `}</style>
  </div>
)

export default GCForm
