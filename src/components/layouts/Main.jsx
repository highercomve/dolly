import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import LogoutButton from '../molecules/LogoutButton/LogoutButton';

export const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(8),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  linearProgress: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  vertialSpace: {
    marginBottom: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.github.com/highercomve/dolly">
        Sergio Marin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function MainLayout ({ children }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <LogoutButton />
      <header>
        <Container maxWidth="md">
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Dolly" height="100px" />
          {/* <Typography variant="h3" color="inherit" noWrap>
            Dolly
          </Typography> */}
        </Container>
      </header>
      <main>
        {children}
      </main>
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Pantahub cloner is a thirdpary opensource project
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  )
}