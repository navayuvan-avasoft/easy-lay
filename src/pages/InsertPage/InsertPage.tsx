import React, { FC } from 'react';
import { Container, Stack, Typography, TextField, Grid, Button } from '@mui/material';
import './InsertPage.scss';

const InsertPage: FC = () => (
  <Container id="InsertPage">
    <Stack spacing={2}>
      <Typography variant="h4" marginBottom={3} component="h3" align="center">
        Add New Store
      </Typography>
      <form>
        <Grid container className="subdiv" rowSpacing={3} columnSpacing={2}>
          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="image-file">Upload Retailer Logo</label>
          </Grid>

          <Grid item sm={6}>
            <TextField id="image-file" type="file" name="image-file" required size="small" />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="ShopName">Shop Name</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="ShopName"
              type="text"
              name="ShopName"
              placeholder="Please Enter Shop Name"
              color="secondary"
              required
              size="small"
            />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="DBFriendlyName">DB Friendly Name</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="DBFriendlyName"
              type="text"
              name="DBFriendlyName"
              placeholder="Please Enter the DBFriendlyName"
              color="secondary"
              required
              size="small"
            />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="ShopDBA">Shop DBA</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="ShopDBA"
              type="text"
              name="ShopDBA"
              placeholder="Please Enter the ShopDBA"
              color="secondary"
              required
              size="small"
            />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="Loc_guid">Location Guid</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="Loc_guid"
              type="text"
              name="Loc_guid"
              color="secondary"
              placeholder="Please Enter the Location Guid"
              required
              size="small"
            />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="WebUrl">Retailers Web URL</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="WebUrl"
              type="text"
              name="WebUrl"
              color="secondary"
              placeholder="Please Enter the WebURL"
              required
              size="small"
            />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="SovernUrl">Retailers Sovern URL</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="SovernUrl"
              type="text"
              name="SovernUrl"
              color="secondary"
              placeholder="Please Enter the Sovern URL"
              required
              size="small"
            />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="Merchantid">Retailers Merchant Guid</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="Merchantid"
              type="text"
              name="Merchantid"
              color="secondary"
              placeholder="Please Enter the Merchant Guid"
              required
              size="small"
            />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="pdpcommonurl">PDP Page CommonURL</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="pdpcommonurl"
              type="text"
              name="pdpcommonurl"
              color="secondary"
              placeholder="Please Enter the PDP Common URL"
              required
              size="small"
            />
          </Grid>

          <Grid item sm={6} container justifyContent="flex-end" alignItems="center">
            <label htmlFor="pdpbuttoncode">PDP Page ButtonCode</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="pdpbuttoncode"
              type="text"
              name="pdpbuttoncode"
              color="secondary"
              placeholder="Please Enter the PDP ButtonCode"
              required
              multiline
              size="small"
            />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="cartcommonurl">Cart Page CommonURL</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="cartcommonurl"
              type="text"
              name="cartcommonurl"
              color="secondary"
              placeholder="Please Enter the Cart Common UrL"
              required
              size="small"
            />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="cartbuttoncode">Cart Page ButtonCode</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="cartbuttoncode"
              type="text"
              name="cartbuttoncode"
              color="secondary"
              placeholder="Please Enter the Cart ButtonCode"
              required
              multiline
              size="small"
            />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="checkoutcommonurl">Checkout Page CommonURL</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="checkoutcommonurl"
              type="text"
              name="checkoutcommonurl"
              color="secondary"
              placeholder="Please Enter the Checkout CommonURL"
              required
              size="small"
            />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="checkoutbuttoncode">Checkout Page ButtonCode</label>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="checkoutbuttoncode"
              type="text"
              name="checkoutbuttoncode"
              color="secondary"
              placeholder="Please Enter the Checkout ButtonCode"
              multiline
              required
              size="small"
            />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="PdpFile">Upload PDPpage JS File</label>
          </Grid>
          <Grid item sm={6}>
            <TextField id="PdpFile" type="file" name="PdpFile" required size="small" />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="cartFile">Upload Cartpage JS File</label>
          </Grid>
          <Grid item sm={6}>
            <TextField id="cartFile" type="file" name="cartFile" required size="small" />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="checkoutFile">Upload Checkoutpage JS File</label>
          </Grid>
          <Grid item sm={6}>
            <TextField id="checkoutFile" type="file" name="checkoutFile" required size="small" />
          </Grid>

          <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
            <label htmlFor="initialFile">Upload Cartpage JS File</label>
          </Grid>
          <Grid item sm={6}>
            <TextField id="initialFile" type="file" name="initialFile" required size="small" />
          </Grid>
          <Grid item container alignContent="center" justifyContent="center" sm={12}>
            <Button
              type="submit"
              id="InsertStoreButton"
              className="ButtonStyle"
              variant="contained"
              value="Insert Store"
            >
              Insert Store
            </Button>
          </Grid>
        </Grid>
      </form>
    </Stack>
  </Container>
);

export default InsertPage;
