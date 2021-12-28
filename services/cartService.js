const CartModel = require("../models/cart");
const OrderModel = require("../models/order");
const CartItemModel = require("../models/cartItem");

module.exports = class CartService {
  async create(data) {
    try {
      const { userId } = data;
      const Cart = new CartModel();
      const cart = await Cart.create(userId);
      return cart;
    } catch (error) {
      throw error;
    }
  }

  async loadCart(userId) {
    try {
      const cart = await CartModel.findByUser(userId);
      const items = await CartItemModel.find(cart.id);
      cart.items = items;
      return cart;
    } catch (error) {
      throw error;
    }
  }

  async addItem(userId, item) {
    try {
      const cart = await CartModel.findByUser(userId);
      const cartItem = await CartItemModel.create({
        cart_id: cart.id,
        ...item,
      });
      return cartItem;
    } catch (error) {
      throw error;
    }
  }

  async updateItem(cartItemId, data) {
    try {
      const cartItem = await CartItemModel.update(cartItemId, data);
      return cartItem;
    } catch (error) {
      throw error;
    }
  }

  async removeItem(cartItemId) {
    try {
      const cartItem = await CartItemModel.delete(cartItemId);
      return cartItem;
    } catch (error) {
      throw error;
    }
  }

  async checkout(cartId, userId) {
    try {
      const cartItems = await CartItemModel.find(cartId);
      const total = cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.qty),
        0
      );

      const Order = new OrderModel({ total, userId });
      Order.addItems(cartItems);
      await Order.create();

      const order = await Order.update({ status: "COMPLETE" });

      return order;
    } catch (error) {
      throw error;
    }
  }
};
