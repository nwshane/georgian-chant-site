import ChantList from './ChantList'
import { fromJS } from 'immutable'

const chantsJson = fromJS([
  {
    id: 1,
    slug: 'shen-khar-venakhi',
    name: {
      ka: 'შენ ხარ ვენახი'
    },
    text: {
      ka: 'შენ ხარ ვენახი ეტც ეტც'
    }
  },
  {
    id: 2,
    slug: 'shobaman-shenman',
    name: {
      ka: 'შობამან შენმან'
    }
  },
  {
    id: 3,
    slug: 'ghmerti-upali',
    name: {
      ka: 'ღმერთი უფალი'
    }
  }
])

const ChantListContainer = () => (
  <ChantList chants={chantsJson} />
)

export default ChantListContainer
