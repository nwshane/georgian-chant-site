// @flow
import NewRecordingForm from './NewRecordingForm'
import EditRecordingForms from './EditRecordingForms'
import type { Chant } from '~/data/types'

type Props = {
  chant: Chant
}

const RecordingsForm = ({chant}: Props) => (
  <section>
    <h3>Recordings</h3>
    <EditRecordingForms chant={chant} />
    <NewRecordingForm chant={chant} />
  </section>
)

export default RecordingsForm
