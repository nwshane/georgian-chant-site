// @flow
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import { auth } from '~/data/firebase'
import AccountCircle from 'material-ui/svg-icons/action/account-circle'

const AccountMenuPresentation = () => (
  <IconMenu
    iconButtonElement={<IconButton><AccountCircle /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem primaryText="Admin Panel" disabled />
    <MenuItem primaryText='Sign Out' onTouchTap={() => auth.signOut()} />
  </IconMenu>
)

export default AccountMenuPresentation
