/* eslint-disable no-console */
import React, { FC, useState } from 'react';
import { Container } from '@mui/material';
import Table from '@mui/material/Table';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import HttpResult from '../../helpers/http/HttpResult';
import OnlineRetailer from '../../models/stores/OnlineRetailer';
// import HttpStatus from '../../models/utils/HttpResult';
// import StoreService from '../../services/StoreService';
import './DashBoard.scss';

/* Setting Mock Data */
const a: OnlineRetailer[] = [
  {
    shopID: 1,
    shopName: 'Best Buy',
    categories: ['Furniture', 'Electronics'],
    isShoppable: true,
  },
  {
    shopID: 2,
    shopName: 'Home',
    categories: ['Furniture', 'Electronics'],
    isShoppable: true,
  },
  { shopID: 2, shopName: 'Jared', categories: ['Furniture', 'Electronics'], isShoppable: true },
  { shopID: 2, shopName: 'LG', categories: ['Furniture', 'Electronics'], isShoppable: false },
  { shopID: 2, shopName: 'Acer', categories: ['Furniture', 'Electronics'], isShoppable: true },
  {
    shopID: 2,
    shopName: 'KitchenAid',
    categories: ['Furniture', 'Electronics'],
    isShoppable: false,
  },
  { shopID: 2, shopName: 'Maujim', categories: ['Furniture', 'Electronics'], isShoppable: true },
  { shopID: 2, shopName: 'Holy', categories: ['Furniture', 'Electronics'], isShoppable: true },
  { shopID: 2, shopName: 'what', categories: ['Furniture', 'Electronics'], isShoppable: false },
  { shopID: 2, shopName: 'how', categories: ['Furniture', 'Electronics'], isShoppable: true },
];

/* Function Component */
const DashBoard: FC = () => {
  /* Initializing state for Table rows */
  const [rows, setRows] = useState<OnlineRetailer[]>(a);

  /* Event to trigger when the user types in search textfield */
  const HandleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    /* Filter the search test from rows and setstate of rows to bind the searched store to the UI */
    const filteredRows = a.filter((row) =>
      row.shopName.toLowerCase().includes(event.target.value.toLowerCase()),
    );
    console.log(filteredRows);
    setRows(filteredRows);
  };

  return (
    <Container>
      <div className="parentheader">
        <h1 className="heading">DashBoard</h1>
        <div className="RightBtns">
          <Button variant="contained" className="RightBtn">
            Add Store
          </Button>
          <Button variant="contained" className="RightBtn">
            Logout
          </Button>
        </div>
      </div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Search Store"
          variant="standard"
          onChange={HandleOnChange}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead className="TableHeader">
            <TableRow>
              <TableCell className="TableHeaderContent">Shop Name</TableCell>
              <TableCell className="TableHeaderContent" align="right">
                Store Status
              </TableCell>
              <TableCell className="TableHeaderContent" align="right">
                Categories
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody role="button" tabIndex={0}>
            {rows.map((row: OnlineRetailer) => (
              <TableRow key={row.shopName}>
                <TableCell component="th" scope="row">
                  {row.shopName}
                </TableCell>
                <TableCell align="right">
                  {row.isShoppable === true ? (
                    <Chip label="In Live" color="primary" />
                  ) : (
                    <Chip label="Down" color="primary" variant="outlined" />
                  )}
                </TableCell>
                <TableCell align="right">{row.categories.join(' | ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DashBoard;
