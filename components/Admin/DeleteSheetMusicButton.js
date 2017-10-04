// @flow
import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'
import type {SheetMusicScore, Dispatch} from '~/data/types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import deleteSheetMusicScore from '~/data/thunks/sheetMusic/deleteSheetMusicScore'

type Props = {
  deleteSheetMusicScore: Function,
  sheetMusicScoreId: string,
  sheetMusicScore: SheetMusicScore
}

class DeleteSheetMusicButton extends Component<Props> {
  constructor (props: Props) {
    super(props)
    const self: any = this
    self.handleClick = self.handleClick.bind(self)
  }

  handleClick () {
    const {deleteSheetMusicScore, sheetMusicScoreId, sheetMusicScore} = this.props
    deleteSheetMusicScore(sheetMusicScoreId, sheetMusicScore)
  }

  render () {
    return (
      <FlatButton label='Delete' secondary onTouchTap={this.handleClick} />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {deleteSheetMusicScore},
  dispatch
)

export default connect(null, mapDispatchToProps)(DeleteSheetMusicButton)
