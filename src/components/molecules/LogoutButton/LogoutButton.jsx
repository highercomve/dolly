import React from "react";
import { connect } from "react-redux";
import { Logout } from "../../../store/auth/actions";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

export function LogoutButton({ token, Logout }) {
  const classes = useStyles();

  if (token === null) {
    return null
  }

  return (
    <Fab
      className={classes.fab}
      variant="extended"
      onClick={Logout}
    >
      Log out
    </Fab>
  )
} 

export default connect(state => ({
  token: state.auth.token,
}), {
  Logout,
})(LogoutButton)