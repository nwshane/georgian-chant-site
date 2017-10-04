// @flow
import React, {Component} from 'react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'

type Props = {
  disabled: boolean,
  value?: number
}

class YearInput extends Component<Props> {
  render () {
    return (
      <FormsyText
        name='year'
        disabled={this.props.disabled}
        floatingLabelText='Year Recorded'
        value={this.props.value}
      />
    )
  }
}

export default YearInput
