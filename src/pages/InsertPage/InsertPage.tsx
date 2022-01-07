import React, { ChangeEvent, FC, useState } from 'react';
import { Container, Stack, Typography, TextField, Grid, Button } from '@mui/material';
import JSFileType from '../../models/stores/JSFileType';
import './InsertPage.scss';

const InsertPage: FC = () => {
  const [shopLogoImageFile, setshopLogoImageFile] = useState<File>();
  const [pdpPageJSFile, setpdpPageJSFile] = useState<File>();
  const [cartPageJSFile, setcartPageJSFile] = useState<File>();
  const [checkoutPageJSFile, setcheckoutPageJSFile] = useState<File>();
  const [initialJSFile, setinitialJSFile] = useState<File>();

  const JSFileHandle = (e: ChangeEvent<HTMLInputElement>, fileType: JSFileType): void => {
    switch (fileType) {
      case JSFileType.PdpFile:
        setpdpPageJSFile((e.target as HTMLInputElement).files?.item(0) as File);
        break;
      case JSFileType.CartFile:
        setcartPageJSFile((e.target as HTMLInputElement).files?.item(0) as File);
        break;
      case JSFileType.CheckoutFile:
        setcheckoutPageJSFile((e.target as HTMLInputElement).files?.item(0) as File);
        break;
      case JSFileType.InitialJSFile:
        setinitialJSFile((e.target as HTMLInputElement).files?.item(0) as File);
        break;
      default:
        break;
    }
  };

  const handleStoreLogo = (event: ChangeEvent<HTMLInputElement>): void => {
    setshopLogoImageFile((event.target as HTMLInputElement).files?.item(0) as File);
  };

  return (
    <Container id="InsertPage">
      <Stack spacing={2}>
        <Typography variant="h4" marginBottom={3} component="h3" align="center">
          Add New Store
        </Typography>
        <form>
          <Grid container rowSpacing={3} columnSpacing={2}>
            <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
              <label htmlFor="image-file">Upload Retailer Logo</label>
            </Grid>

            <Grid item sm={6}>
              <TextField
                id="image-file"
                value={shopLogoImageFile}
                type="file"
                name="image-file"
                required
                onChange={handleStoreLogo}
                size="small"
              />
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
              <TextField
                id="PdpFile"
                type="file"
                name="PdpFile"
                value={pdpPageJSFile}
                onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                  JSFileHandle(e, JSFileType.PdpFile)
                }
                required
                size="small"
              />
            </Grid>

            <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
              <label htmlFor="cartFile">Upload Cartpage JS File</label>
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="cartFile"
                type="file"
                name="cartFile"
                value={cartPageJSFile}
                onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                  JSFileHandle(e, JSFileType.CartFile)
                }
                required
                size="small"
              />
            </Grid>

            <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
              <label htmlFor="checkoutFile">Upload Checkoutpage JS File</label>
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="checkoutFile"
                type="file"
                value={checkoutPageJSFile}
                onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                  JSFileHandle(e, JSFileType.CheckoutFile)
                }
                name="checkoutFile"
                required
                size="small"
              />
            </Grid>

            <Grid container justifyContent="flex-end" alignItems="center" item sm={6}>
              <label htmlFor="initialFile">Upload Cartpage JS File</label>
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="initialFile"
                type="file"
                name="initialFile"
                value={initialJSFile}
                onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                  JSFileHandle(e, JSFileType.InitialJSFile)
                }
                required
                size="small"
              />
            </Grid>
            <Grid item container alignContent="center" justifyContent="center" sm={12}>
              <Button type="submit" id="InsertStoreButton" variant="contained" value="Insert Store">
                Insert Store
              </Button>
            </Grid>
          </Grid>
        </form>
      </Stack>
    </Container>
  );
};

export default InsertPage;
