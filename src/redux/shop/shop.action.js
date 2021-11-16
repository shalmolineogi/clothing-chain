import ShopActionType from "./shop.actionType";

export const updateShopData = (collection) => ({
  type: ShopActionType.UPDATE_SHOPDATA,
  payload: collection,
});
