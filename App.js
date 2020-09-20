import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, KeyboardAvoidingView } from 'react-native';
import {Provider} from 'mobx-react';



// Router
import Router from './src/Router';


const App = () => {
  return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <Router/>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
});

export default App;
