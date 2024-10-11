// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import profileImage from '../assets/profile.jpg'; // Placeholder profile image

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Profile Picture and Name */}
      <View style={styles.profileContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>Jose Manalo</Text>
      </View>

      {/* Menu Items */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('DetailedProfile')}
      >
        <Ionicons name="person-outline" size={24} color="black" style={styles.menuIcon} />
        <Text style={styles.menuText}>My Profile </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="receipt-outline" size={24} color="black" style={styles.menuIcon} />
        <Text style={styles.menuText}>My Order </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="log-out-outline" size={24} color="black" style={styles.menuIcon} />
        <Text style={styles.menuText}>Log out </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
  },
});

export default ProfileScreen;
