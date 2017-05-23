// @flow
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

const currentPath = (originalUrl?: string, router: {asPath?: string}): string => {
  if (router.asPath) {
    return router.asPath
  } else if (originalUrl) {
    return originalUrl
  } else {
    return '/'
  }
}

const newPath = ({locale, router}, {originalUrl}) => (
  currentPath(originalUrl, router).replace(/^\/(\w\w)?/, `/${locale}`)
)

type Props = {
  text: string,
  locale: string,
  router: {
    asPath?: string
  }
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

export default withRouter(LocaleLink)
