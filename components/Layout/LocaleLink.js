// @flow
import Router from 'next/router'
import { PropTypes } from 'react'

const currentPath = (originalUrl?: string): string => {
  if (typeof window === 'object') {
    return Router.asPath
  } else if (originalUrl) {
    return originalUrl
  } else {
    return '/'
  }
}

const newPath = ({locale}, {originalUrl}) => (
  currentPath(originalUrl).replace(/^\/(\w\w)?/, `/${locale}`)
)

type Props = {
  text: string,
  locale: string
}

type Context = {
  originalUrl?: string
}

const LocaleLink = (props: Props, context: Context) => (
  <a href={newPath(props, context)}>
    {props.text}
  </a>
)

LocaleLink.contextTypes = {
  originalUrl: PropTypes.string
}

export default LocaleLink
