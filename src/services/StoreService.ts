/* eslint-disable no-debugger */
import HttpClient from '../helpers/http/HttpHelper';
import OnlineRetailer from '../models/stores/OnlineRetailer';
import Config from '../configs/config.json';
import HttpResult from '../helpers/http/HttpResult';
import HttpStatus from '../models/utils/HttpResult';
import InsertStoreModel from '../models/stores/InsertStoreModel';
import FetchConfigModel from '../models/stores/FetchConfigModel';
import OverlayDBDataModel from '../models/stores/OverlayDBDataModel';
import OverlayResultModel from '../models/stores/OverlayResultModel';
import CategoryAssociationModel from '../models/stores/CategoryAssociationModel';
import InsertStoreResultModel from '../models/stores/InsertStoreResultModel';

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

  static postRetailerLogo = async (ShopLogo: FormData): Promise<HttpResult<boolean>> => {
    try {
      debugger;
      const httpClient = await HttpClient.Create<boolean, FormData>();
      const response = await httpClient.post(String(Config.ROUTES.POST_RETAILER_LOGO), ShopLogo);
      return response;
    } catch (error) {
      return {
        data: null,
        status: HttpStatus.Failed,
        message: (error as Error).message,
      };
    }
  };

  static postOnlineBulkInsert = async (
    InsertStoreData: InsertStoreModel,
  ): Promise<HttpResult<InsertStoreResultModel>> => {
    try {
      debugger;
      const httpClient = await HttpClient.Create<InsertStoreResultModel, typeof InsertStoreData>();
      const response = await httpClient.post(
        String(Config.ROUTES.POST_INSERTSTORE),
        InsertStoreData,
      );
      debugger;

      return response;
    } catch (error) {
      debugger;
      return {
        data: null,
        status: HttpStatus.Failed,
        message: (error as Error).message,
      };
    }
  };

  static getOverlayConfig = async (
    FetchData: FetchConfigModel,
  ): Promise<HttpResult<OverlayDBDataModel>> => {
    try {
      debugger;
      const httpClient = await HttpClient.Create<OverlayDBDataModel, FetchConfigModel>();
      const response = await httpClient.post(String(Config.ROUTES.GET_OVERLAY_CONFIG), FetchData);

      return response;
    } catch (error) {
      return {
        data: null,
        status: HttpStatus.Failed,
        message: (error as Error).message,
      };
    }
  };

  static postOverlayDBConfig = async (
    ConfigData: OverlayDBDataModel,
  ): Promise<HttpResult<OverlayResultModel>> => {
    try {
      debugger;
      const httpClient = await HttpClient.Create<OverlayResultModel, OverlayDBDataModel>();
      const response = await httpClient.post(String(Config.ROUTES.POST_OVERLAY_CONFIG), ConfigData);

      return response;
    } catch (error) {
      return {
        data: null,
        status: HttpStatus.Failed,
        message: (error as Error).message,
      };
    }
  };

  static uploadJSFiles = async (
    JSFile: FormData,
    JSFileName: string,
  ): Promise<HttpResult<boolean>> => {
    try {
      debugger;
      const httpClient = await HttpClient.Create<boolean, FormData>();
      const response = await httpClient.post(
        `${String(Config.ROUTES.POST_JS_FILE)}?OnlineStoreName=${JSFileName}`,
        JSFile,
      );
      return response;
    } catch (error) {
      return {
        data: null,
        status: HttpStatus.Failed,
        message: (error as Error).message,
      };
    }
  };

  static postRetailerCategory = async (
    CategoryData: CategoryAssociationModel,
  ): Promise<HttpResult<OverlayResultModel>> => {
    try {
      debugger;
      const httpClient = await HttpClient.Create<OverlayResultModel, CategoryAssociationModel>();
      const response = await httpClient.post(
        String(Config.ROUTES.POST_RETAILER_CATEGORY),
        CategoryData,
      );
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
