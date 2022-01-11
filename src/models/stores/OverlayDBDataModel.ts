interface OverlayDBDataModel {
  shopID: number;
  shopName: string;
  dbFriendlyShopName: string;
  shopWebURL: string;
  shopSovrnWebURL: string;
  initialJSCodeURL: string;
  finalJSCodeURL?: string;
  gridPageCommonURL?: string;
  gridPageButtonCode?: string;
  gridPageJSCodeURL?: string;
  pdpPageCommonURL: string;
  pdpPageButtonCode: string;
  pdpPageJSCodeURL?: string;
  checkoutPageCommonURL: string;
  checkoutPageButtonCode?: string;
  checkoutPageJSCodeURL: string;
  cartPageCommonURL: string;
  cartPageButtonCode: string;
  cartPageJSCodeURL: string;
  paymentCardNumber?: string;
  paymentCardExpiryMonth?: string;
  paymentCardExpiryYear?: string;
  paymentCardCVV?: string;
}
export default OverlayDBDataModel;
