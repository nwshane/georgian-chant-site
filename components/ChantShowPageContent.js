// @flow
import type { Chant } from '~/data/types'

type Props = {
  chant: Chant
}

const ChantShowPageContent = ({chant}: Props) => (
  <div>
    <h1>{chant.name && chant.name.ka}</h1>
    <p>{chant.text && chant.text.ka}</p>
  </div>
)

export default ChantShowPageContent
