import React,{ useState } from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';

// Navigators
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LoginPage from './screens/LoginPage';



const Stack = createStackNavigator();




const LoginStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'red'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Contact" component={LoginPage} options={{ title: 'Login'}} />
        </Stack.Navigator>
    );
};



const Router = () => {

  return(
      <NavigationContainer>
          <LoginStack/>
      </NavigationContainer>
  );


};

const styles = StyleSheet.create({});

export default Router;