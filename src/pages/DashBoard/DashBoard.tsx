import React, { FC, useState } from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import OnlineRetailer from '../../models/stores/OnlineRetailer';
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
    setRows(filteredRows);
  };

  return (
    /* Parent Container */
    <Container>
      <div className="parentheader">
        {/* Header Contents */}
        <h1 className="heading">DashBoard</h1>
        {/* DropDown to select the config */}
        <div className="RightBtns">
          <FormControl className="dropDownWidth">
            <InputLabel id="demo-simple-select-label">Config</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Config">
              <MenuItem value={10}>Dev</MenuItem>
              <MenuItem value={20}>QA</MenuItem>
              <MenuItem value={30}>UAT</MenuItem>
              <MenuItem value={30}>Prod</MenuItem>
            </Select>
          </FormControl>
          {/* Button to navigate to Add Stores Page */}
          <Button variant="contained" className="RightBtn">
            Add Store
          </Button>
          {/* Button to Logout */}
          <Button variant="contained" className="RightBtn">
            Logout
          </Button>
        </div>
      </div>
      {/* Search Box */}
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

      {/* Display All Retailers in a table Format */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          {/* Table Header */}
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

          {/* Table Body 
              Each Row in a table is a clickable row. So that the data of the clicked
              row can be passed to the next page
          */}
          <TableBody role="button" tabIndex={0}>
            {/* Iterating throught each element in the response object */}
            {rows.map((row: OnlineRetailer) => (
              <TableRow key={row.shopName}>
                {/* Display the shop name of the retailer */}
                <TableCell component="th" scope="row">
                  {row.shopName}
                </TableCell>
                {/* If isShoppable is true show a chip to display that the store
                is in live. If not display a chip to display that the store is
                down */}
                <TableCell align="right">
                  {row.isShoppable === true ? (
                    <Chip label="In Live" color="primary" />
                  ) : (
                    <Chip label="Down" color="primary" variant="outlined" />
                  )}
                </TableCell>
                {/* Display the categories of the retailer by seperating it with a '|'
                symbol */}
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
