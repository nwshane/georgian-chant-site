// @flow
import type { Chant } from '~/data/types'

type Props = {
  chant: Chant
}

const ChantShowPageContent = ({chant}: Props) => (
  <div>
    <h1>{chant.name && chant.name.ka}</h1>
    <h2>{chant.name && chant.name.en}</h2>
    <p>{chant.text && chant.text.ka}</p>
    <p>{chant.text && chant.text.en}</p>
  </div>
)

export default ChantShowPageContent
