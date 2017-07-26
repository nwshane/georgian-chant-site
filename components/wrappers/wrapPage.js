// @flow
import type { Element } from 'react'
import pageWithIntl from './pageWithIntl'
import withRedux from 'next-redux-wrapper'
import initStore from '~/data/initStore'

const wrapPage = (Page: Element<any> | Function) => (
  withRedux(initStore)(pageWithIntl(Page))
)

export default wrapPage
