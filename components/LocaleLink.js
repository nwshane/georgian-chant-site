import { Component, PropTypes } from 'react'

const currentPath = (originalUrl) => {
  if (typeof window === 'object') {
    return window.location.pathname
  } else {
    return originalUrl
  }
}

class LocaleLink extends Component {
  constructor (props) {
    super(props)
    this.path = this.path.bind(this)
  }

  path () {
    const { locale } = this.props
    const { originalUrl } = this.context

    return currentPath(originalUrl).replace(/^\/\w\w/, `/${locale}`)
  }
  render () {
    const { text } = this.props
    return (
      <a href={this.path()}>
        {text}
      </a>
    )
  }
}

LocaleLink.contextTypes = {
  originalUrl: PropTypes.string
}

export default LocaleLink
