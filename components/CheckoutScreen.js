import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For delete icon
import bottleImage from '../assets/bottle.png'; // Assuming this is used as a placeholder image

const CheckoutScreen = ({ cart, setCart }) => {
  // Function to handle deleting an item from the cart
  const handleDeleteItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Function to handle updating the quantity of an item
  const handleUpdateQuantity = (index, delta) => {
    const newCart = [...cart];
    const updatedQuantity = newCart[index].quantity + delta;
    if (updatedQuantity > 0) {
      newCart[index].quantity = updatedQuantity;
      setCart(newCart);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.cartItem}>
              {/* Delete Icon Positioned at the Top Right */}
              <TouchableOpacity
                style={styles.deleteIconContainer}
                onPress={() => handleDeleteItem(index)}
              >
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>

              <Image source={bottleImage} style={styles.cartItemImage} />
              <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemTitle}>
                  {`${item.flavor1.name} + ${item.flavor2.name}`}
                </Text>
                <Text style={styles.cartItemSubtitle}>
                  {`Size: ${item.size}, Sugar Level: ${item.sugarLevel}`}
                </Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButtonSmall}
                    onPress={() => handleUpdateQuantity(index, -1)}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButtonSmall}
                    onPress={() => handleUpdateQuantity(index, 1)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.cartItemPrice}>{`₱${item.price * item.quantity}`}</Text>
              </View>
            </View>
          )}
        />
      )}
      <TouchableOpacity
        style={[styles.checkoutButton, cart.length === 0 && { opacity: 0.5 }]}
        onPress={() => {
          if (cart.length > 0) {
            // Handle checkout action
          }
        }}
        disabled={cart.length === 0}
      >
        <Text style={styles.checkoutButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative',
  },
  deleteIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cartItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 15,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButtonSmall: {
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 14,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  checkoutButton: {
    backgroundColor: '#0275d8',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CheckoutScreen;