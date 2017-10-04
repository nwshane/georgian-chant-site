// @flow
import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import type {SheetMusicScore, School} from '~/data/types'
import {getSchool} from '~/data/ducks/schools'
import {connect} from 'react-redux'
import {getTransliteratedName} from '~/data/getters'
import {injectIntl} from 'react-intl'
import type {IntlShape} from 'react-intl'

type Props = {
  sheetMusicScore: SheetMusicScore,
  school: School,
  intl: IntlShape
}

const SheetMusicTableRow = (props: Props) => {
  const {sheetMusicScore, school, intl: {locale}} = props
  return (
    <TableRow>
      <TableRowColumn>
        {getTransliteratedName(locale, school)}
      </TableRowColumn>
      <TableRowColumn>
        <a target='_blank' href={sheetMusicScore.url}>
          View
        </a>
      </TableRowColumn>
    </TableRow>
  )
}

const mapStateToProps = (state, props) => ({
  school: getSchool(props.sheetMusicScore.school, state)
})

export default injectIntl(connect(mapStateToProps)(SheetMusicTableRow))
