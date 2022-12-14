import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Vidans Fashion</title>
      </Head>

      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>vidan's fashion</Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.main}>{children}</Container>

      <footer className={classes.footer}>
        <Typography>All right reserved. Vidans Fashion</Typography>
      </footer>
    </div>
  );
};

export default Layout;
