// @flow
import type { Chant } from '~/data/types'
import ChantHeading from '~/components/chant/ChantHeading'
import ChantText from '~/components/chant/ChantText'
import ChantRecordings from '~/components/chant/ChantRecordings'

type Props = {
  chant: Chant
}

const ChantShowPageContent = ({chant}: Props) => (
  <div>
    <ChantHeading chant={chant} />
    <ChantText chant={chant} />
    <ChantRecordings chant={chant} />
  </div>
)

export default ChantShowPageContent
