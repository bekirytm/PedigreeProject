import React,{ useState } from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';

// Navigators
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

// SVGR
import {User, List, Plus} from './components/icons/index';

// Screens
import LoginPage from './screens/Login/LoginPage';
import SignUp from './screens/SignUp/SignUp';

import Home from './screens/Home/Home';
import Animal from './screens/Animals/Animals';
import Addanimal from './screens/AddAnimal/AddAnimal';




const Stack = createStackNavigator();
const StackAnimals = createStackNavigator();
const TabBar = createBottomTabNavigator();

//
const AnimalsStact = () => {
    return(
        <StackAnimals>
            {/*<StackAnimals.Screen name={}*/}
        </StackAnimals>
    )
}


const TabBarNavigation = () => {
    return(
        <TabBar.Navigator initialRouteName='Profile' tabBarOptions={{
            activeTintColor: '#E84A4D',
            inactiveTintColor: '#D4ADAC',
            style: {
                backgroundColor: '#370617'
            }

        }}>
            <TabBar.Screen name={"Profile"} component={Home} options={{
                tabBarIcon: User
            }}/>
            <TabBar.Screen name={"Animals"} component={Animal} options={{
                tabBarIcon: List
            }}/>
            <TabBar.Screen name={"AddAnimal"} component={Addanimal} options={{
                tabBarIcon: Plus
            }}/>
        </TabBar.Navigator>
    )
}

const LoginStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login'}} />
            <Stack.Screen name={"TabBar"} component={TabBarNavigation} />
            <Stack.Screen name={"SignUp"} component={SignUp} />
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