// AppNavigator.js
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';
import CheckoutScreen from '../components/CheckoutScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [cart, setCart] = useState([]);

  return (
    <Stack.Navigator initialRouteName="Product">
      <Stack.Screen name="Product" options={{ headerShown: false }}>
        {(props) => <ProductScreen {...props} cart={cart} setCart={setCart} />}
      </Stack.Screen>
      <Stack.Screen name="Checkout" >
        {(props) => <CheckoutScreen {...props} cart={cart} setCart={setCart} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppNavigator;
