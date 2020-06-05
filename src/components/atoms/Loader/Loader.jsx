import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  xs: {
    transform: 'scale(1)'
  },
  sm: {
    transform: 'scale(2)'
  },
  lg: {
    transform: 'scale(3)'
  }
}))

export default function Loader ({ message, size }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CircularProgress className={classes[size]} />
      {message && (<h4>{message}</h4>)}
    </div >
  )
}
