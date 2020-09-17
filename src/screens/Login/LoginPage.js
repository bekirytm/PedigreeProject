import React from 'react';
import { View,KeyboardAvoidingView,Platform, Text,TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';

// Components
import LoginForm from './LoginForm';
import LoginLogo from './LoginLogo';






const LoginPage = ({navigation}) => {
  return(

    <View style={styles.container}>

        <View style={styles.headerBackground}/>
            <View style={styles.logoContainer}>
                <LoginLogo/>
            </View>

            <View style={styles.formContainer}>
                <View style={{marginTop: 10, marginHorizontal: 50 }}>
                    <Text style={styles.loginText}>Log In</Text>
                </View>
                <View style={styles.formContent}>
                    <LoginForm navigation={navigation}/>
                </View>
            </View>
            <View>
                <TouchableOpacity style={{width: 100, height: 30, backgroundColor: 'red'}} onPress={() => navigation.navigate('SignUp')}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 800,
        width: '100%',
        backgroundColor: '#C78180',

    },
    loginText: {
        color: '#ffffff'
    },
    logoContainer: {
        flex: 0.45,
        justifyContent: 'flex-end',
        paddingTop: 10


    },
    formContainer: {
        flex: 0.55
    },
});

export default LoginPage;