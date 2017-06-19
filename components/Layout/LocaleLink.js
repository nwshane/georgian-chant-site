// @flow
import Router from 'next/router'
import PropTypes from 'prop-types'

const currentPath = (originalUrl?: string): string => {
  if (typeof window === 'object') {
    // $FlowFixMe: Router does not include asPath in flow-type; suppressing until I can use withRouter HOC and bypass use of Router altogether
    return Router.asPath
  } else if (originalUrl) {
    return originalUrl
  } else {
    return '/'
  }
}

const localePathRegex = /^\/(en|ka)?/

const newPath = ({locale}, {originalUrl}) => {
  const path = currentPath(originalUrl)

  if (localePathRegex.test(path)) {
    return currentPath(originalUrl).replace(localePathRegex, `/${locale}`)
  } else {
    return `/${locale}`
  }
}

type Props = {
  text: string,
  locale: string
}

type Context = {
  originalUrl?: string
}

const LocaleLink = (props: Props, context: Context) => (
  <span>
    <a href={newPath(props, context)}>
      {props.text}
    </a>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </span>
)

LocaleLink.contextTypes = {
  originalUrl: PropTypes.string
}

export default LocaleLink
