import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles
} from '@material-ui/core'
import ResultRow from './ResultRow'
import usePartner from '../../hooks/usePartner'

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, partners, ...rest }) => {
  const classes = useStyles();

  const { removePartner } = usePartner()

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Cégnév</TableCell>
                <TableCell>Cégforma</TableCell>
                <TableCell>Adószám</TableCell>
                <TableCell>Cégjegyzékszám</TableCell>
                <TableCell>Település</TableCell>
                <TableCell>Cím</TableCell>
                <TableCell>Telefon</TableCell>
                <TableCell>Bankszámlaszám</TableCell>
                <TableCell>Megjegyzés</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {partners?.map(({ id, ...rest }) => (
                <ResultRow
                  key={id}
                  id={id}
                  {...rest}
                  onRemove={removePartner}
                /> 
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  partners: PropTypes.array.isRequired
};

export default Results;
