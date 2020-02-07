/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Login, GetUser, SaveTokenAndRedirect } from '../../../store/auth/actions'
import { STATUS } from '../../../store/auth/reducer'

function IsAuthenticated ({ children, status, token, Login, GetUser, SaveTokenAndRedirect }) {
  useEffect(() => {
    const hash = location.hash

    if (hash !== '') {
      SaveTokenAndRedirect(hash)
      return
    }
    
    if (!hash && !token) {
      Login()
      return
    }
  }, [token, SaveTokenAndRedirect, Login])

  useEffect(() => {
    if (status === null) {
      GetUser()
    }
  }, [GetUser, status])

  if (status === STATUS.INPROGRESS) {
    return (
      <CircularProgress />
    )
  }
  return (
    <div className="App">
      {children}
    </div>
  )
}

export default connect(
  (state) => ({ 
    token: state.auth.token,
    status: state.auth.status,
  }),
  {
    Login,
    GetUser,
    SaveTokenAndRedirect
  }
)(IsAuthenticated)