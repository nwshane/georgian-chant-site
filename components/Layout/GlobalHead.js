// @flow
import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import Head from 'next/head'

const { description } = defineMessages({
  description: {
    id: 'description',
    defaultMessage: 'GeorgianChant.org is an online database of Georgian Orthodox chants and related resources.'
  }
})

const GlobalHead = ({intl}) => (
  <Head>
    <meta name='description' content={intl.formatMessage(description)} />
  </Head>
)

export default injectIntl(GlobalHead)
