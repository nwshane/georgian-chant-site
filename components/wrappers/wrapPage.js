// @flow
import type { Element } from 'react'
import connectPage from './connectPage'
import pageWithIntl from './pageWithIntl'

const wrapPage = (Page: Element<any> | Function) => (
  connectPage()(pageWithIntl(Page))
)

export default wrapPage
