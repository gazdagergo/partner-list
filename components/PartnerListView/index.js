import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Results from './Results';
import Toolbar from './Toolbar';
import Page from '../Page';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));


const PartnerListView = ({ partners }) => {
  const classes = useStyles()

  return (
    <Page
      className={classes.root}
      title="Partners"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results partners={partners} />
        </Box>
      </Container>
    </Page>
  )
}

export default PartnerListView;
