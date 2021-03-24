import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, partners, ...rest }) => {
  const classes = useStyles();


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
              </TableRow>
            </TableHead>
            <TableBody>
              {partners?.map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                >
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{customer.company_form}</TableCell>
                  <TableCell>{customer.tax_number}</TableCell>
                  <TableCell>{customer.registration_number}</TableCell>
                  <TableCell>{customer.settlement}</TableCell>
                  <TableCell>{customer.address}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.account_number}</TableCell>
                  <TableCell>{customer.note}</TableCell>
                </TableRow>
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
