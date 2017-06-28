// @flow
import RaisedButton from 'material-ui/RaisedButton'
import Form from '~/components/presentation/Form'
import RecordingInput from './RecordingInput'

type Props = {
  handleSubmit: Function,
  handleChangeFile: Function,
  visible: boolean,
  showForm: Function
}

const RecordingFormPresentation = ({visible, showForm, handleSubmit, handleChangeFile}: Props) => (
  visible
  ? (
    <Form
      onSubmit={handleSubmit}
      encType='multipart/form-data'
    >
      <RecordingInput handleChangeFile={handleChangeFile} />
      <style jsx>{`
          form {
            margin: 50px 0 30px;
          }
          `}</style>

      <RaisedButton type='submit'>
        Upload Recording
      </RaisedButton>
    </Form>
  ) : (
    <RaisedButton onTouchTap={showForm}>
      Add a New Recording
    </RaisedButton>
  )
)

export default RecordingFormPresentation
