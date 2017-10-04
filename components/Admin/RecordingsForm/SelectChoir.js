// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChoirs } from '~/data/ducks/choirs'
import { FormsySelect } from 'formsy-material-ui/lib'
import MenuItem from 'material-ui/MenuItem'
import type { Choirs } from '~/data/types'
import { getTranslatedName } from '~/data/getters'
import { injectIntl } from 'react-intl'
import type { IntlShape } from 'react-intl'
import { mapObjIndexed, values } from 'ramda'

type Props = {
  value: string,
  choirs: Choirs,
  intl: IntlShape,
  disabled: boolean
}

type State = {
  value: string
}

// TODO: Localize
class SelectChoir extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      value: props.value || Object.keys(props.choirs)[0]
    }

    const self: any = this
    self.handleChange = self.handleChange.bind(this)
  }

  handleChange = (event: any, index: string, bla) => {
    this.setState({value: index})
  }

  render () {
    const {intl: {locale}, choirs} = this.props
    return (
      <FormsySelect
        name='choir'
        required
        disabled={this.props.disabled}
        value={this.state.value}
        onChange={this.handleChange}
        floatingLabelText='Choir'
      >
        {values(mapObjIndexed((choir, key) => (
          <MenuItem key={key} value={key} primaryText={getTranslatedName(locale, choir)} />
        ), choirs))}
      </FormsySelect>
    )
  }
}

const mapStateToProps = (state) => ({
  choirs: getChoirs(state)
})

export default injectIntl(connect(mapStateToProps)(SelectChoir))
