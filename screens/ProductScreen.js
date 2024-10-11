import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import bottleImage from '../assets/bottle.png';
import lemonImage from '../assets/lemon.png';
import cucumberImage from '../assets/cucumber.png';
import appleImage from '../assets/apple.png';
import backgroundImage from '../assets/d6.png'; // Import your background image

const screenWidth = Dimensions.get('window').width;

const ProductScreen = ({ cart, setCart }) => {
  const navigation = useNavigation();

  const [flavor1, setFlavor1] = useState({ name: 'Flavor 1', image: null });
  const [flavor2, setFlavor2] = useState({ name: 'Flavor 2', image: null });
  const [size, setSize] = useState('Size');
  const [sugarLevel, setSugarLevel] = useState('0%');
  const [flavor1ModalVisible, setFlavor1ModalVisible] = useState(false);
  const [flavor2ModalVisible, setFlavor2ModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const price = 299;

  const flavors = [
    { name: 'Lemon', image: lemonImage },
    { name: 'Cucumber', image: cucumberImage },
    { name: 'Apple', image: appleImage },
  ];

  // Function to clear all selections
  const handleClear = () => {
    setFlavor1({ name: 'Flavor 1', image: null });
    setFlavor2({ name: 'Flavor 2', image: null });
    setSize('Size');
    setSugarLevel('0%');
    setQuantity(1);
  };

  // Function to check if all required fields are selected
  const isAddToCartEnabled = flavor1.image && flavor2.image && size !== 'Size' && sugarLevel !== '0%';

  // Function to handle adding to cart
  const handleAddToCart = () => {
    if (isAddToCartEnabled) {
      // Add current item to cart
      const newItem = {
        flavor1,
        flavor2,
        size,
        sugarLevel,
        quantity,
        price,
      };
      setCart([...cart, newItem]);
      handleClear(); // Optionally clear selections after adding to cart
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Personal Blend</Text>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <View style={styles.sideContainer}>
            {/* Flavor 1 Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Flavor 1</Text>
              <TouchableOpacity
                style={[styles.circleButton, { backgroundColor: '#15456B' }]}
                onPress={() => setFlavor1ModalVisible(true)}
              >
                {flavor1.image ? (
                  <Image source={flavor1.image} style={styles.flavorImage} />
                ) : (
                  <Text style={styles.circleText}>{flavor1.name} </Text>
                )}
              </TouchableOpacity>
            </View>

            {/* Flavor 2 Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Flavor 2</Text>
              <TouchableOpacity
                style={[styles.circleButton, { backgroundColor: '#15456B' }]}
                onPress={() => setFlavor2ModalVisible(true)}
              >
                {flavor2.image ? (
                  <Image source={flavor2.image} style={styles.flavorImage} />
                ) : (
                  <Text style={styles.circleText}>{flavor2.name} </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottle Image Container */}
          <View style={styles.bottleContainer}>
            <Image source={bottleImage} style={styles.bottleImage} />
          </View>

          <View style={styles.sideContainer}>
            {/* Size Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Size</Text>
              <TouchableOpacity
                style={[styles.circleButton, { backgroundColor: '#15456B' }]}
                onPress={() => {
                  setSize(size === '250 ml' ? '500 ml' : '250 ml');
                }}
              >
                <Text style={styles.circleText}>{size} </Text>
              </TouchableOpacity>
            </View>

            {/* Sugar Level Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Sugar Level</Text>
              <TouchableOpacity
                style={[styles.circleButton, {  backgroundColor: '#15456B' }]}
                onPress={() => {
                  const levels = ['0%', '25%', '50%', '100%'];
                  const currentIndex = levels.indexOf(sugarLevel);
                  setSugarLevel(levels[(currentIndex + 1) % levels.length]);
                }}
              >
                <Text style={styles.circleText}>{sugarLevel} </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quantity and Price */}
        <View style={styles.quantityContainer}>
          <Text style={styles.sectionTitle}>Qty</Text>
          <View style={styles.quantityButtons}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.price}>₱{price * quantity}</Text>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          {/* Clear Button */}
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>

          {/* Add to Cart and Checkout Buttons */}
          <View style={styles.bottomButtons}>
            <TouchableOpacity
              style={[styles.addToCartButton, !isAddToCartEnabled && { opacity: 0.5 }]}
              onPress={handleAddToCart}
              disabled={!isAddToCartEnabled}
            >
              <Text style={styles.addToCartText}>ADD TO CART</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate('Checkout')}
            >
              <Text style={styles.checkoutText}>CHECKOUT ({cart.length})</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Flavor 1 Modal */}
        <Modal visible={flavor1ModalVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContentClean}>
              <Text style={styles.modalTitle}>Select Flavor 1</Text>
              {flavors.map((flavor) => (
                <TouchableOpacity
                  key={flavor.name}
                  style={styles.modalButtonClean}
                  onPress={() => {
                    setFlavor1(flavor);
                    setFlavor1ModalVisible(false);
                  }}
                >
                  <Image source={flavor.image} style={styles.modalFlavorImage} />
                  <Text style={styles.modalButtonText}>{flavor.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>

        {/* Flavor 2 Modal */}
        <Modal visible={flavor2ModalVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContentClean}>
              <Text style={styles.modalTitle}>Select Flavor 2</Text>
              {flavors.map((flavor) => (
                <TouchableOpacity
                  key={flavor.name}
                  style={styles.modalButtonClean}
                  onPress={() => {
                    setFlavor2(flavor);
                    setFlavor2ModalVisible(false);
                  }}
                >
                  <Image source={flavor.image} style={styles.modalFlavorImage} />
                  <Text style={styles.modalButtonText}>{flavor.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // This makes the background cover the entire screen
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'transparent', // Make container transparent to show background image
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    height: '50%',
    
  },
  sideContainer: {
    alignItems: 'center',
    flex: 1,
    
  },
  sectionContainer: {
    alignItems: 'center',
    marginBottom: 5,
    zIndex: 2,
  },
  bottleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    zIndex: 1,
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  circleText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  flavorImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  bottleImage: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
   
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
  },
  quantityButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  quantityButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 16,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  actionButtons: {
    marginTop: 25,
    marginBottom: 20,
  },
  clearButton: {
    backgroundColor: '#d9534f',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  clearButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    backgroundColor: '#5bc0de',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 5,
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: '#15456B',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    flex: 1,
    marginLeft: 5,
  },
  checkoutText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContentClean: {
    width: screenWidth * 0.9,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalButtonClean: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
    width: '100%',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  modalFlavorImage: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
});

export default ProductScreen;
