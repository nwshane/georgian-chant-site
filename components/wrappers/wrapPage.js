// @flow
import connectPage from './connectPage'
import pageWithIntl from './pageWithIntl'

const wrapPage = (Page: React$Element<any> | Function) => (
  connectPage()(pageWithIntl(Page))
)

export default wrapPage
