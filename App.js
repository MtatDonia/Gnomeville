import React, { useState, useEffect } from 'react';
import ListInhabitants from './screens/ListInhabitants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailInhabitant from './screens/DetailInhabitant';


const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name="ListInhabitants" component={ListInhabitants} options={{ headerShown: false }}/>
    <Stack.Screen name="DetailInhabitant" component={DetailInhabitant} options={{ title: 'Detail Page' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;