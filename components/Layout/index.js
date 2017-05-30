// @flow
import type { Children } from 'react'
import Header from './Header'
import GlobalStyle from './GlobalStyle'
import GlobalHead from './GlobalHead'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AuthChangeSubscriber from './AuthChangeSubscriber'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppMessageDisplay from './AppMessageDisplay'
import '~/components/tapEvents'

const Layout = (props : { children?: Children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <GlobalStyle />
      <GlobalHead />
      <AuthChangeSubscriber />
      <Header />
      <AppMessageDisplay />
      {props.children}
      <style jsx>{`
      div {
        max-width: 900px;
        margin: 0 auto;
        font-size: 1.6rem;
        font-family: 'Open Sans', sans-serif;
        padding: 0 10px;
      }
      `}
      </style>
    </div>
  </MuiThemeProvider>
)

export default Layout
