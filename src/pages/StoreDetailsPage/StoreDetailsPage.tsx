/* eslint-disable no-console */
import { Button, Container } from '@mui/material';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React, { FC } from 'react';
import StoreDetails from '../../models/stores/StoreDetails';
import StoreDown from '../../models/stores/StoreDown';
import HttpStatus from '../../models/utils/HttpResult';
import StoreStatus from '../../models/utils/StoreStatus';
import StoreService from '../../services/StoreService';
import './StoreDetailsPage.scss';

/* Mock Data */
const a: StoreDetails = {
  shopID: 6,
  shopName: 'Best Buy',
  dbFriendlyShopName: 'BestBuy',
  shopDBA: 'BestBuy',
  shopLocationGUID: 'loca-asd-23-asd',
  merchantID: 'ecom-asd-f44s',
  shopWebURL: 'https://www.demo.html',
  shopSovrnWebURL: 'https://www.demo.html',
  shopLogoURL: 'images/demo.png',
  isShoppable: false,
  isPopular: true,
  isNew: true,
};

/* Styling for the Contents */
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

/* Handle Store up or Store Down button action */
const StoreUpClicked =
  (value: StoreStatus) =>
  /* Button click event */
  async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    console.log('clicked');
    /* get the value of the incoming store */
    const StoredownDetils: StoreDown = {
      shopID: a.shopID,
      shopName: a.shopName,
      dbFriendlyShopName: a.dbFriendlyShopName,
    };
    /* If the button clicked props comes as down, store service for down the 
       store is called. 
       If not, store service for up the store is called
    */
    const getStoreResponse =
      value === StoreStatus.down
        ? await StoreService.storeDown(StoredownDetils)
        : await StoreService.storeUp(StoredownDetils);

    if (getStoreResponse.status === HttpStatus.Success) {
      console.log('deleted succesfully');
    }
    console.log(event.target);
  };

/* Functional Component */
const StoreDetailsPage: FC = () => (
  /* Main Container */
  <Container>
    {/* Header part */}
    <div className="Header">
      {/* Display the shop name */}
      <h1>{a.shopName}</h1>
      {/* If the store is live, display the In Live chip
          If the store is down, display the Down chip
      */}
      {a.isShoppable === true ? (
        <Chip className="left-btn" label="In Live" color="primary" />
      ) : (
        <Chip className="left-btn" label="In Down" color="primary" variant="outlined" />
      )}
      {/* If the store is popular, display the Popular chip
          If not, don't display anything
      */}
      {a.isPopular === true ? (
        <Chip className="left-btn" label="Popular" color="primary" />
      ) : (
        React.Fragment
      )}
      {/* If the store is in Live, display the Store down button
          If the store is down, display the Store Up button
      */}
      {a.isShoppable === true ? (
        <Button variant="contained" className="RightBtn" onClick={StoreUpClicked(StoreStatus.down)}>
          Store Down
        </Button>
      ) : (
        <Button variant="contained" className="RightBtn" onClick={StoreUpClicked(StoreStatus.up)}>
          Store Up
        </Button>
      )}
    </div>
    {/* For displaying the details of the selected store */}
    <div>
      {/* Iterate through the incoming object by using entries method 
          and display all fields.
          
          Since we are already displaying the isShoppable, isPopular and isNew
          we are not displaying it in the contents section
       */}
      {Object.entries(a).map(([key, value]) =>
        key !== 'isShoppable' && key !== 'isNew' && key !== 'isPopular' ? (
          <Stack
            className="topseperator"
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Item className="rightseperator">{key}</Item>
            <Item className="leftseperator">{value}</Item>
          </Stack>
        ) : (
          React.Fragment
        ),
      )}
    </div>
  </Container>
);

export default StoreDetailsPage;
