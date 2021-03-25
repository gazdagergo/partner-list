import React, { useEffect } from 'react'
import {
  Box,
  TableCell,
  TableRow,
  Typography,
  IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import styled, { keyframes, css } from 'styled-components'
import usePartner from '../../hooks/usePartner'

const deletingRow = keyframes`
  0% { opacity: 100%; background: darkred; }
  100% { opacity: 0;  background: darkred; }
`

const complexMixin = css`
  animation-duration: 1s;
  animation-name: ${deletingRow};
  animation-fill-mode: forwards;
`

const TableRowStyled = styled(TableRow)`
  ${({ collapsed }) => collapsed ? complexMixin : ''}
`

const ResultRow = ({
  id,
  name,
  companyForm,
  taxNumber,
  registrationNumber,
  settlement,
  address,
  phone,
  accountNumber,
  note,
  toRemove,
  onRemove,
}) => {
  const { removeLine } = usePartner()
  useEffect(() => {
    if (toRemove) {
      setTimeout(() => removeLine(id), 1000)
    }
  }, [toRemove])
  return (
      <TableRowStyled
        collapsed={toRemove}
        hover
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
              {name}
            </Typography>
          </Box>
        </TableCell>
        <TableCell>{companyForm?.name}</TableCell>
        <TableCell>{taxNumber}</TableCell>
        <TableCell>{registrationNumber}</TableCell>
        <TableCell>{settlement?.name}</TableCell>
        <TableCell>{address}</TableCell>
        <TableCell>{phone}</TableCell>
        <TableCell>{accountNumber}</TableCell>
        <TableCell>{note}</TableCell>
        <TableCell>
          <IconButton
            edge="end"
            size="small"
            onClick={() => onRemove(id)}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRowStyled>
  )
}

export default ResultRow
