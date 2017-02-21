import ChantList from './ChantList'
import { fromJS } from 'immutable'

const chantsJson = fromJS([
  {
    id: 1,
    name: {
      ka: 'შენ ხარ ვენახი'
    },
    text: {
      ka: 'შენ ხარ ვენახი ეტც ეტც'
    }
  },
  {
    id: 2,
    name: {
      ka: 'შობამან შენმან'
    }
  },
  {
    id: 3,
    name: {
      ka: 'ღმერთი უფალი'
    }
  }
])

const ChantListContainer = () => (
  <ChantList chants={chantsJson} />
)

export default ChantListContainer
