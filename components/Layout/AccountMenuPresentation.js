// @flow
import LocalizedLink from '~/components/LocalizedLink'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import AccountCircle from 'material-ui/svg-icons/action/account-circle'

type Props = {
  handleSignout: Function
}

const AccountMenuPresentation = ({handleSignout}: Props) => (
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

export default AccountMenuPresentation
