// @flow
import type { Chant } from '~/data/types'
import ChantHeading from '~/components/chant/ChantHeading'

type Props = {
  chant: Chant
}

const ChantShowPageContent = ({chant}: Props) => (
  <div>
    <ChantHeading chant={chant} />
    <p>{chant.text && chant.text.ka}</p>
    <p>{chant.text && chant.text.en}</p>
  </div>
)

export default ChantShowPageContent
