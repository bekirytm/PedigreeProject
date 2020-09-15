import React from 'react';
import { View,KeyboardAvoidingView, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';

// Components
import LoginForm from './LoginForm';
import LoginLogo from './LoginLogo';






const LoginPage = () => {
  return(
    <View style={styles.container}>
        <View style={styles.headerBackground}/>
        <View>
            <LoginLogo></LoginLogo>
        </View>
        <ScrollView>
            <KeyboardAvoidingView behavior={'position'}>
                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
    formContainer: {
        justifyContent: 'center'
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 800,
        width: '100%',
        backgroundColor: '#C78180',

    },
});

export default LoginPage;