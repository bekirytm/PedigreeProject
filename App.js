import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import {Provider} from 'mobx-react';
import store from './src/store';


// Router
import Router from './src/Router';


const App = () => {
  return (
      <Provider {...store}>
          <Router/>
      </Provider>

  );
};

const styles = StyleSheet.create({
});

export default App;
