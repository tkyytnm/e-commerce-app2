const createError = require("http-errors");
const CartModel = require("../models/cart");
const CartModelInstance = new CartModel();
const CartItemModel = require("../models/cartItem");
const CartItemModelInstance = new CartItemModel();

module.exports = class CartService {
  async create(data) {
    try {
      const {userId} = data;
      const cart = await CartModelInstance.create(userId);
      return cart;
    } catch (error) {
      throw new Error(error);
    }
  }

  async list(cartId) {
    try {
      const cartItems = await CartItemModelInstance.getItems(cartId);
      return cartItems;
    } catch (error) {
      throw new Error(error);
    }
  }
};
