import React from 'react'
import { connect } from 'react-redux'
import { Logout } from '../../../store/auth/actions'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'

export const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2)
  }
}))

export function LogoutButton ({ token, Logout }) {
  const classes = useStyles()

  if (token === null) {
    return null
  }

  return (
    <Button
      className={classes.fab}
      variant="outlined"
      onClick={Logout}
    >
      Log out
    </Button>
  )
}

export default connect(state => ({
  token: state.auth.token
}), {
  Logout
})(LogoutButton)
