import ViewModel from "./ViewModel";

export default class ServiceViewModel extends ViewModel{
  constructor() {
    super()
    this.fields = {
      shopId: 0,
      status: 0,
      orderNo: 0,
      ownShopId: 0,
      shared: false,
      serviceCategoryId: 0,
      serviceCategoryName: "",
      isHeadquarterGoods: false,
      numberOfActiveChildItems: 0,
      modificationDate: new Date(),
      registrationDate: new Date(),
    }
  }
}