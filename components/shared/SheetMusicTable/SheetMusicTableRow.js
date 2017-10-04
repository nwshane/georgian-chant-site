// @flow
import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import type {SheetMusicScore, School} from '~/data/types'
import {getSchool} from '~/data/ducks/schools'
import {connect} from 'react-redux'
import {getTransliteratedName} from '~/data/getters'
import {injectIntl} from 'react-intl'
import type {IntlShape} from 'react-intl'
import ChantLink from '~/components/ChantLink'
import DeleteSheetMusicButton from '~/components/Admin/DeleteSheetMusicButton'

type Props = {
  hide?: Array<string>,
  sheetMusicScore: SheetMusicScore,
  sheetMusicScoreId: string,
  school: School,
  intl: IntlShape
}

const SheetMusicTableRow = (props: Props) => {
  const {hide, sheetMusicScoreId, sheetMusicScore, school, intl: {locale}} = props
  return (
    <TableRow>
      {
        hide && hide.includes('chant')
          ? null
          : (
            <TableRowColumn>
              <ChantLink chantSlug={sheetMusicScore.chantSlug} />
            </TableRowColumn>
          )
      }
      <TableRowColumn>
        {getTransliteratedName(locale, school)}
      </TableRowColumn>
      <TableRowColumn>
        <a target='_blank' href={sheetMusicScore.url}>
          View
        </a>
      </TableRowColumn>
      {
        hide && hide.includes('actions')
          ? null
          : (
            <TableRowColumn>
              <DeleteSheetMusicButton
                {...{sheetMusicScoreId, sheetMusicScore}}
              />
            </TableRowColumn>
          )
      }
    </TableRow>
  )
}

const mapStateToProps = (state, props) => ({
  school: getSchool(props.sheetMusicScore.school, state)
})

export default injectIntl(connect(mapStateToProps)(SheetMusicTableRow))
