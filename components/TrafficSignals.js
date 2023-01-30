import React from 'react';
import { View, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import BulbOff from './BulbOff';
const Stack = createStackNavigator();

export default function (){
  return (
    <View style={styles.flex}>
  
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} 
            options={{ headerShown: false }} />
             <Stack.Screen name='BulbOff' component={BulbOff} 
            options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
     
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});
