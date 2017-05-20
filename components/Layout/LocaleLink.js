import Router from 'next/router'
import { PropTypes } from 'react'

const currentPath = (originalUrl) => {
  if (typeof window === 'object') {
    return Router.asPath
  } else {
    return originalUrl
  }
}

const newPath = ({locale}, {originalUrl}) => (
  currentPath(originalUrl).replace(/^\/\w\w/, `/${locale}`)
)

const LocaleLink = (props, context) => (
  <a href={newPath(props, context)}>
    {props.text}
  </a>
)

LocaleLink.contextTypes = {
  originalUrl: PropTypes.string
}

export default LocaleLink
