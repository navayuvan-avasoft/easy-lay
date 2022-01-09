import HttpClient from '../helpers/http/HttpHelper';
import OnlineRetailer from '../models/stores/OnlineRetailer';
import Config from '../configs/config.json';
import HttpResult from '../helpers/http/HttpResult';
import HttpStatus from '../models/utils/HttpResult';
import StoreDown from '../models/stores/StoreDown';

class StoreService {
  static getAllStores = async (): Promise<HttpResult<OnlineRetailer[]>> => {
    try {
      const httpClient = await HttpClient.Create<OnlineRetailer[], null>();
      const response = await httpClient.get(Config.ROUTES.GET_ALL_RETAILERS);
      return response;
    } catch (error) {
      return {
        data: null,
        status: HttpStatus.Failed,
        message: (error as Error).message,
      };
    }
  };
  static storeDown = async (b: StoreDown): Promise<HttpResult<StoreDown>> => {
    try {
      const httpClient = await HttpClient.Create<StoreDown, typeof b>();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const response = await httpClient.post(Config.ROUTES.STORE_DOWN, b);
      return response;
    } catch (error) {
      return {
        data: null,
        status: HttpStatus.Failed,
        message: (error as Error).message,
      };
    }
  };
  static storeUp = async (b: StoreDown): Promise<HttpResult<StoreDown>> => {
    try {
      const httpClient = await HttpClient.Create<StoreDown, typeof b>();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const response = await httpClient.post(Config.ROUTES.STORE_UP, b);
      return response;
    } catch (error) {
      return {
        data: null,
        status: HttpStatus.Failed,
        message: (error as Error).message,
      };
    }
  };
}

export default StoreService;
