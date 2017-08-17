// @flow
import React from 'react'

const GlobalStyle = () => (
  <style jsx global>
    {`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans');

      html {
        font-size: 10px;
      }

      body {
        margin: 0;
      }
    `}
  </style>
)

export default GlobalStyle
