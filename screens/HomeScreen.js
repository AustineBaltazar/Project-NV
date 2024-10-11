import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import bottleImage from '../assets/bottle.png'; // Example image, replace with your own
import { FontAwesome } from '@expo/vector-icons'; // For icons like the cart and heart

const products = [
  { id: '1', name: 'Pure Water', price: '₱25.00', image: bottleImage },
  { id: '2', name: 'Pure Water', price: '₱25.00', image: bottleImage },
  { id: '3', name: 'Pure Water', price: '₱25.00', image: bottleImage },
  { id: '4', name: 'Pure Water', price: '₱25.00', image: bottleImage },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={20} color="#777" />
        <TextInput placeholder="Search Flavor" style={styles.searchInput} />
        <TouchableOpacity>
          <FontAwesome name="shopping-cart" size={24} color="dodgerblue" />
        </TouchableOpacity>
      </View>

      {/* Promotion Section */}
      <View style={styles.promoSection}>
        <View>
          <Text style={styles.promoTitle}>Customize Your Taste</Text>
          <Text style={styles.promoSubtitle}>Up to 100% Pure Enjoyment</Text>
          <TouchableOpacity style={styles.tryNowButton}>
            <Text style={styles.tryNowButtonText}>Try Now!</Text>
          </TouchableOpacity>
        </View>
        <Image source={bottleImage} style={styles.promoImage} />
      </View>

      {/* Seasonal Flavor Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Seasonal Flavor</Text>
        <TouchableOpacity onPress={() => { /* Add navigation to see all */ }}>
          <Text style={styles.seeAllText}>See all </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productList}>
        {products.map(item => (
          <View key={item.id} style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.likeButton}>
              <FontAwesome name="heart-o" size={24} color="dodgerblue" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* See More... */}
      <TouchableOpacity style={styles.seeMoreButton}>
        <Text style={styles.seeMoreText}>See More...</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  promoSection: {
    flexDirection: 'row',
    backgroundColor: '#15456B',
    borderRadius: 10,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  promoTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  promoSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 12,
  },
  tryNowButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tryNowButtonText: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  promoImage: {
    width: 80,
    height: 160,
    resizeMode: 'contain',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#007aff',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%', // Two products per row
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 160,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    color: '#007aff',
    fontSize: 14,
    marginBottom: 8,
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  seeMoreButton: {
    alignItems: 'center',
    padding: 12,
   
  },
  seeMoreText: {
    color: '#007aff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
