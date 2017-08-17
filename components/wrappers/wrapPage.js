// @flow
import type { Node } from 'react'
import pageWithIntl from './pageWithIntl'
import withRedux from 'next-redux-wrapper'
import initStore from '~/data/initStore'

const wrapPage = (Page: Node | Function) => (
  withRedux(initStore)(pageWithIntl(Page))
)

export default wrapPage
