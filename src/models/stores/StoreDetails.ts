interface StoreDetails {
  shopID: number;
  shopName: string;
  dbFriendlyShopName: string;
  shopDBA?: string;
  shopLocationGUID?: string;
  merchantID?: string;
  shopWebURL: string;
  shopSovrnWebURL?: string;
  shopLogoURL?: string;
  isShoppable: boolean;
  isPopular: boolean;
  isNew: boolean;
}

export default StoreDetails;
