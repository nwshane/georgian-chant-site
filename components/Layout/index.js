// @flow
import React from 'react'
import type { Node } from 'react'
import Header from './Header'
import GlobalStyle from './GlobalStyle'
import GlobalHead from './GlobalHead'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import FirebaseSubscriber from './FirebaseSubscriber'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppMessageDisplay from './AppMessageDisplay'
import '~/components/tapEvents'

const Layout = (props : { children: Node }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <GlobalStyle />
      <GlobalHead />
      <FirebaseSubscriber />
      <Header />
      <AppMessageDisplay />
      <main>
        {props.children}
      </main>
      <style jsx>{`
      div {
        max-width: 900px;
        margin: 0 auto;
        font-size: 1.6rem;
        font-family: 'Open Sans', sans-serif;
        padding: 0 10px;
      }
      main {
        margin-top: 30px;
        margin-bottom: 50px;
      }
      `}
      </style>
    </div>
  </MuiThemeProvider>
)

export default Layout
