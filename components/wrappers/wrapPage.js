// @flow
import type { ComponentType } from 'react'
import pageWithIntl from './pageWithIntl'
import withRedux from 'next-redux-wrapper'
import initStore from '~/data/initStore'

const wrapPage = (Page: ComponentType<any>) => (
  withRedux(initStore)(pageWithIntl(Page))
)

export default wrapPage
