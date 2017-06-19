// @flow
import { injectIntl } from 'react-intl'
import LocalizedLink from '~/components/LocalizedLink'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import AccountCircle from 'material-ui/svg-icons/action/account-circle'

const AccountMenuPresentation = ({handleSignout}) => (
  <IconMenu
    iconButtonElement={<IconButton><AccountCircle /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <LocalizedLink
      href='/admin'
    >
      <a>
        <MenuItem primaryText='Admin Panel' />
      </a>
    </LocalizedLink>
    <MenuItem primaryText='Sign Out' onTouchTap={handleSignout} />
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </IconMenu>
)

export default injectIntl(AccountMenuPresentation)
